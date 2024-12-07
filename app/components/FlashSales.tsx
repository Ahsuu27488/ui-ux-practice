"use client";
import Image from "next/image";
import React, { useRef } from "react";
import FlashSaleProduct1 from "./flash-sale-products/FLashSaleProduct1";
import FlashSaleProduct2 from "./flash-sale-products/FlashSaleProduct2";
import FlashSaleProduct3 from "./flash-sale-products/FlashSaleProduct3";
import FlashSaleProduct4 from "./flash-sale-products/FlashSaleProduct4";
import FlashSaleProduct5 from "./flash-sale-products/FlashSaleProduct5";

const FlashSales = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-32 pt-20 flex flex-col gap-10 border-b-gray-200 border-b pb-4">
      <div className="flex gap-4 items-center ">
        <span className="bg-[#DB4444] h-8 w-4 rounded-sm"></span>
        <h1 className="text-[#DB4444] font-semibold ">Today's</h1>
      </div>
      <div className="flex gap-24 pt- items-end justify-between">
        <div className="flex gap-24 items-end">
          <h1 className="font-semibold text-black text-4xl">Flash Sales</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="">
              <h1 className="font-medium text-base">Days</h1>
              <p className="font-bold text-2xl">3</p>
            </div>
            <span className="text-[#E07575] text-4xl">:</span>
            <div className="">
              <h1 className="font-medium text-base">Hours</h1>
              <p className="font-bold text-2xl">23</p>
            </div>
            <span className="text-[#E07575] text-4xl">:</span>
            <div className="">
              <h1 className="font-medium text-base">Minutes</h1>
              <p className="font-bold text-2xl">19</p>
            </div>
            <span className="text-[#E07575] text-4xl">:</span>
            <div className="">
              <h1 className="font-medium text-base">Seconds</h1>
              <p className="font-bold text-2xl">56</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 h-12 pl-8 items-center justify-center">
          <button
            onClick={() =>
              scrollContainerRef.current?.scrollBy({
                left: -500,
                behavior: "smooth",
              })
            }
          >
            <Image
              src="/images/left-arrow.png"
              alt="Left Button"
              width={46}
              height={46}
              className="hover:scale-150 transition-all duration-200 ease-in-out"
            />
          </button>
          <button
            onClick={() =>
              scrollContainerRef.current?.scrollBy({
                left: 500,
                behavior: "smooth",
              })
            }
          >
            <Image
              src="/images/right-arrow.png"
              alt="Right Button"
              width={46}
              height={46}
              className="hover:scale-150 transition-all duration-200 ease-in-out"
            />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto scroll-smooth "
      >
        <div className="category-shadow">
          <FlashSaleProduct1 />
        </div>
        <div className="category-shadow">
          <FlashSaleProduct2 />
        </div>
        <div className="category-shadow">
          <FlashSaleProduct3 />
        </div>
        <div className="category-shadow">
          <FlashSaleProduct4 />
        </div>
        <div className="category-shadow">
          {" "}
          <FlashSaleProduct5 />
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <button className=" bg-[#DB4444] text-white font-medium py-4 px-10 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
