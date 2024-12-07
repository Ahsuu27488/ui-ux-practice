import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-32 py-20 bg-black text-[#FAFAFA] border-b-gray-600 border-b">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Exclusive</h1>
          <h1 className="text-[20px] font-medium">Subscribe</h1>
          <div className="gap-2 flex flex-col">
            <h1 className="text-[16px] font-normal">
              Get 10% off your first order
            </h1>
            <div className="relative">
              <input
                placeholder="Enter your email"
                className="bg-transparent text-sm py-2 pr-10 pl-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400 rounded outline outline-1"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute top-1/2 right-3 w-5 h-5  transform -translate-y-1/2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Support</h1>
          <div className="flex flex-col gap-4 text-[16px] font-normal">
            <h2>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h2>
            <h2>exclusive@gmail.com</h2>
            <h2>+88015-88888-9999</h2>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Account</h1>
          <div className="flex flex-col gap-4 text-[16px] font-normal">
            <h2>My Account</h2>
            <h2>Login / Register</h2>
            <h2>Cart</h2>
            <h2>Wishlist</h2>
            <h2>Shop</h2>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Quick Link</h1>
          <div className="flex flex-col gap-4 text-[16px] font-normal">
            <h2>Privacy Policy</h2>
            <h2>Terms of Use</h2>
            <h2>FAQ</h2>
            <h2>Contact</h2>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">Download App</h1>
          <div className="flex flex-col gap-6">
            <Image
              src="/images/downloadbutton.png"
              alt=""
              width={198}
              height={110}
            />
            <Image
              src="/images/socialicons.png"
              alt=""
              width={168}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
