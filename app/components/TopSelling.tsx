import React from "react";
import Image from "next/image";
import TopSellingProduct1 from "./top-selling-products/TopSellingProduct1";
import TopSellingProduct2 from "./top-selling-products/TopSellingProduct2";
import TopSellingProduct3 from "./top-selling-products/TopSellingProduct3";
import TopSellingProduct4 from "./top-selling-products/TopSellingProduct4";

const TopSelling = () => {
  return (
    <div className="mx-32 pt-20 flex flex-col gap-10 border-b-gray-200 border-b pb-4">
      <div className="flex gap-4 items-center ">
        <span className="bg-[#DB4444] h-8 w-4 rounded-sm"></span>
        <h1 className="text-[#DB4444] font-semibold ">This Month</h1>
      </div>
      <div className="flex gap-24 pt- items-end justify-between">
        <div className="flex gap-24 items-end">
          <h1 className="font-semibold text-black text-4xl">Top Selling Products</h1>
        </div>
        <div className="flex gap-2 h-12 pl-8 items-center justify-center">
          <button className=" bg-[#DB4444] text-white font-medium py-4 px-10 rounded">
            View All
          </button>
        </div>
      </div>
      <div className="flex gap-8 scale-90 justify-start">
        <div className="category-shadow">
          <TopSellingProduct1 />
        </div>
        <div className="category-shadow">
          <TopSellingProduct2 />
        </div>
        <div className="category-shadow">
          <TopSellingProduct3 />
        </div>
        <div className="category-shadow">
          <TopSellingProduct4 />
        </div>
      </div>
      <div className="flex justify-center items-center py-8"></div>
    </div>
  );
};

export default TopSelling;
