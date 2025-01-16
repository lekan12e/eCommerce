"use client";

import Image from "next/image";
import Button from "./Button";

const CartModal = () => {
  const cartitems = true;
  return (
    <div className="w-max absolute p-4 rounded-md bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-12 right-0 flex flex-col gap-6 z-30 ">
      {!cartitems ? (
        <div className=""> cart is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {}
            <div className="flex gap-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={72}
                height={96}
                className=" object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">desc</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$45</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <Button name="View Cart" style="white-button" />
              <Button name="Checkout" style="button" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
