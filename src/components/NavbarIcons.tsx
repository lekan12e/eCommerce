"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    isCartOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* Profile Icon */}
      <div className="group relative">
        <div
          className="p-2 rounded-full hover:bg-slate-200 cursor-pointer transition duration-300"
          onClick={handleProfile}>
          <Image width={22} height={22} src="/profile.png" alt="profile-logo" />
        </div>
        {isProfileOpen && (
          <div className="absolute p-4 rounded-md top-12 left-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 text-sm">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )}
      </div>

      {/* Notification Icon */}
      <div className="group relative">
        <div className="p-2 rounded-full hover:bg-slate-200 cursor-pointer transition duration-300">
          <Image
            width={22}
            height={22}
            src="/notification.png"
            alt="notification-logo"
          />
        </div>
      </div>

      {/* Cart Icon */}
      <div className="group relative">
        <div
          className="p-2 rounded-full hover:bg-slate-200 cursor-pointer transition duration-300"
          onClick={() => setIsCartOpen((prev) => !prev)}>
          <Image width={22} height={22} src="/cart.png" alt="cart-logo" />
          <div className="absolute rounded-full flex items-center -top-2 -right-2 h-6 w-6 text-white text-sm justify-center bg-lama">
            {2}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <>
          <CartModal />
          <div
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="fixed top-[60px] h-screen left-0 w-screen bg-slate-500 bg-opacity-50 backdrop-blur-md z-20"></div>
        </>
      )}
    </div>
  );
};

export default NavbarIcons;
