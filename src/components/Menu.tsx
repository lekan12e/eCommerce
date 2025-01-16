"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  console.log(open);
  return (
    <div>
      <Image
        className="cursor-pointer"
        src="/menu.png"
        alt="menu-logo"
        width={28}
        height={28}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div
          className="fixed bg-black text-white top-20 left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center
         gap-8 text-xl z-50">
          <Link href="/">Homepage</Link>
          <Link href="">Shop</Link>
          <Link href="">Deals</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          <Link href="">Logout</Link>
          <Link href="">Cart(0)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
