import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex px-32 pt-8">
      <div className="border-r-gray-200 border-r  pr-4">
        <ul className="w-64 flex flex-col gap-3">
          <li className="flex justify-between">
            Women's Fashion{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li className="flex justify-between">
            Men's Fashion{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li className="">Electronics</li>
          <li className="">Home & Lifestyle</li>
          <li className="">Medicine</li>
          <li className="">Sports & Outdoors</li>
          <li className="">Baby's & Toys</li>
          <li className="">Groceries & Pets</li>
          <li className="">Health & Beauty</li>{" "}
        </ul>
      </div>
      <div>
        {/* Hero Section */}
        <div className="bg-[#000000] h-80 w-[830px] text-white  pt-8 px-12 ml-9 ">
          <div className="flex items-center">
            <div className="flex flex-col gap-14">
              <div className="flex items-center gap-3 text-sm">
                {" "}
                <Image
                  src="/images/apple-logo.png"
                  alt="Apple Logo"
                  width={35}
                  height={40}
                />{" "}
                iPhone 14 Series
              </div>
              <div className="font-semibold text-4xl">
                {" "}
                Up to 10% off Voucher
              </div>
              <div className="flex gap-3 items-center  overflow-hidden">
                <span className="border-b border-b-gray-500">Shop now</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>{" "}
            </div>
            {/* Hero Image  */}
            <div className="">
              <Image
                src="/images/hero-iph.png"
                alt="Apple Logo"
                width={450}
                height={300}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <span className="h-3 w-3 rounded-full bg-[#808080] "></span>
            <span className="h-3 w-3 rounded-full bg-[#808080] "></span>
            <span className="h-3 w-3 rounded-full border-2 bg-[#DB4444] "></span>
            <span className="h-3 w-3 rounded-full bg-[#808080] "></span>
            <span className="h-3 w-3 rounded-full bg-[#808080] "></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
