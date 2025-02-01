import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  const naira = "&#8358;";
  return (
    <div className="px-4 py-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      <div className="flex justify-between flex-col md:flex-row gap-24">
        <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>247 Shagamu Road, Odoguyan Ikorodu Lagos State</p>
          <a href="mailto:Oyeniranolalekan6@gmail.com" className="font-bold">
            Oyeniranolalekan6@gmail.com
          </a>
          <a href="tel:09031873661" className="font-bold">
            09031873661
          </a>
          <div className="flex gap-6">
            <Image
              src="/facebook.png"
              alt="facebook logo"
              width={16}
              height={16}
            />
            <Image
              src="/instagram.png"
              alt="instagram logo"
              width={16}
              height={16}
            />
            <Image
              src="/youtube.png"
              alt="youtube logo"
              width={16}
              height={16}
            />
            <Image
              src="/pinterest.png"
              alt="pinterest logo"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x logo" width={16} height={16} />
          </div>
        </div>
        <div className="w-2/4 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between ">
            <h1 className="text-2xl font-bold">Company</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="text-2xl font-bold">Shop</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="text-2xl font-bold">Help</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest products, promotions, and so much
            more
          </p>
          <div className="flex rounded-xl w-full">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4 outline-none rounded-l-lg"
            />
            <button className="w-1/4 bg-lama text-white rounded-r-lg active:scale-95 transition-all ease-in-out duration-200">
              JOIN
            </button>
          </div>

          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image alt="" width={40} height={20} src="/discover.png" />
            <Image alt="" width={40} height={20} src="/skrill.png" />
            <Image alt="" width={40} height={20} src="/paypal.png" />
            <Image alt="" width={40} height={20} src="/mastercard.png" />
            <Image alt="" width={40} height={20} src="/visa.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&copy; 2025 Lama Store</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <span className="text-gray-500 mr-4">Language</span>
          <span className="font-medium">Nigeria | English</span>
        </div>
        <div className="">
          <span className="text-gray-500 mr-4">Currency</span>
          <span className="font-medium">&#8358; NGN</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
