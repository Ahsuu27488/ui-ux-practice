import React from "react";
import Image from "next/image";
const FlashSaleProduct4 = () => {
  return (
    <div className="w-[270px] h-[350px]">
      <div className="relative w-[270px] h-[250px]">
        <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
          <h1 className="font-normal text-xs text-[#FAFAFA] bg-[#DB4444] w-12 h-6 rounded-[4px] mx-4 my-3 flex justify-center items-center">
            -25%
          </h1>
          <div className="absolute top-2 right-2 gap-2 flex flex-col">
            <div className="size-8 bg-white rounded-full flex justify-center items-center">
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div className="size-8 bg-white rounded-full flex justify-center items-center">
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
          <div className="product-bg-height absolute">
            <Image
              src="/images/chair.png"
              alt="Chair"
              width={107}
              height={180}
            />
          </div>
          <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full bottom-[-100%] group-hover:bottom-0 transition-all duration-200 ease-in-out">Add To Cart</h1>
        </span>
      </div>
      <div className="flex flex-col gap-2 justify-end">
        <h1 className="font-medium text-lg">S-Series Comfort Chair</h1>
        <div className=" gap-3 flex font-normal text-lg text-[#DB4444]">
          <p className="">$375</p>
          <p className="line-through text-black opacity-50">$400</p>
        </div>
        <div className=" flex gap-2">
          <Image
            src="/images/fourhalfstar.png"
            alt="Stars"
            width={100}
            height={20}
          />
          <p className="font-semibold text-sm opacity-50">(99)</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProduct4;
