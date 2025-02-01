import { Suspense } from "react";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* campaign */}
      <div className="hidden sm:flex bg-pink-50 px-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on Selected Products
          </h1>
          <button className="rounded-3xl bg-lama w-max text-white py-3 px-5 text-sm active:scale-95 transition-all">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="woman image"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <Suspense fallback={<div>Loading filters...</div>}>
        <Filter />
      </Suspense>

      <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>

      <Suspense fallback={<div>Loading products...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Page;
