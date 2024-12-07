"use client";
import Image from "next/image";
import React, { useRef } from "react";

const Categories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mx-32 pt-12 border-b-gray-200 border-b pb-16">
      <div className="flex gap-4 items-center">
        <span className="bg-[#DB4444] h-8 w-4 rounded-sm"></span>
        <h1 className="text-[#DB4444] font-semibold">Categories</h1>
      </div>
      <div className="flex items-center justify-between pt-6">
        <h1 className="font-semibold text-black text-4xl">
          Browse By Category
        </h1>
        <div className="flex gap-2">
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
              className="hover:scale-150 transition-transform duration-200 ease-in-out"
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
              className="hover:scale-150 transition-transform duration-200 ease-in-out"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-8 pt-8 ">
        <div className="w-[170px] h-[145px] border-gray-200 border rounded flex justify-center items-center flex-col text-base gap-2 hover:bg-[#DB4444] transition duration-100 ease-in-out category-shadow hover:text-[#FAFAFA]">
          <Image
            src="/images/Category-CellPhone.png"
            alt="Category"
            width={56}
            height={56}
          />{" "}
          <h1>Phones</h1>
        </div>
        <div className="w-[170px] h-[145px] border-gray-200 border rounded flex justify-center items-center flex-col text-base gap-2 hover:bg-[#DB4444] transition duration-100 ease-in-out category-shadow hover:text-[#FAFAFA]">
          <Image
            src="/images/Category-Computer.png"
            alt="Category"
            width={56}
            height={56}
          />
          <h1>Computer</h1>
        </div>
        <div className="w-[170px] h-[145px] border-gray-200 border rounded flex justify-center items-center flex-col text-base gap-2 hover:bg-[#DB4444] transition duration-100 ease-in-out category-shadow hover:text-[#FAFAFA]">
          <Image
            src="/images/Category-SmartWatch.png"
            alt="Category"
            width={56}
            height={56}
          />
          <h1>Smartwatch</h1>
        </div>
        <div className="w-[170px] h-[145px] border-gray-200 border rounded flex justify-center items-center flex-col text-base gap-2 bg-[#DB4444] hover:bg-[#FAFAFA] transition duration-100 ease-in-out category-shadow text-[#FAFAFA] hover:text-black">
          <Image
            src="/images/Category-Camera.png"
            alt="Category"
            width={56}
            height={56}
            className=""
          />
          <h1>Camera</h1>
        </div>
        <div className="w-[170px] h-[145px] border-gray-200 border rounded flex justify-center items-center flex-col text-base gap-2 hover:bg-[#DB4444] transition duration-100 ease-in-out category-shadow hover:text-[#FAFAFA]">
          <Image
            src="/images/Category-Headphone.png"
            alt="Category"
            width={56}
            height={56}
          />
          <h1>Headphones</h1>
        </div>
        <div className="w-[170px] h-[145px] border-gray-200 border rounded flex justify-center items-center flex-col text-base gap-2 hover:bg-[#DB4444] transition duration-100 ease-in-out category-shadow hover:text-[#FAFAFA]">
          <Image
            src="/images/Category-Gamepad.png"
            alt="Category"
            width={56}
            height={56}
          />
          <h1>Gaming</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
