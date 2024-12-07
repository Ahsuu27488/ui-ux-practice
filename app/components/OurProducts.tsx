import React from "react";
import Image from "next/image";
import OurProduct1 from "./our-products/OurProduct1";
import OurProduct2 from "./our-products/OurProduct2";
import OurProduct3 from "./our-products/OurProduct3";
import OurProduct4 from "./our-products/OurProduct4";
import OurProduct6 from "./our-products/OurProduct6";
import OurProduct5 from "./our-products/OurProduct5";
import OurProduct7 from "./our-products/OurProduct7";
import OurProduct8 from "./our-products/OurProduct8";

const OurProducts = () => {
  return (
    <div className="mx-32 pt-20 flex flex-col gap-10 ">
      <div className="flex gap-4 items-center ">
        <span className="bg-[#DB4444] h-8 w-4 rounded-sm"></span>
        <h1 className="text-[#DB4444] font-semibold ">Our Products</h1>
      </div>
      <div className="flex gap-24 pt- items-end justify-between">
        <div className="flex gap-24 items-end">
          <h1 className="font-semibold text-black text-4xl">
            Explore our Products
          </h1>
        </div>
        <div className="flex gap-2 h-12 pl-8 items-center justify-center">
          <button>
            <Image
              src="/images/left-arrow.png"
              alt="Left Button"
              width={46}
              height={46}
              className="hover:scale-150 transition-all duration-200 ease-in-out"
            />
          </button>
          <button>
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
      <div className="flex gap-8 scale-90 justify-start">
        <div className=" ">
          <OurProduct1 />
        </div>
        <div className=" ">
          <OurProduct2 />
        </div>
        <div className=" ">
          <OurProduct3 />
        </div>
        <div className=" ">
          <OurProduct4 />
        </div>
      </div>
      <div className="flex gap-8 scale-90 justify-start">
        <div className=" ">
          <OurProduct5 />
        </div>
        <div className=" ">
          <OurProduct6 />
        </div>
        <div className=" ">
          <OurProduct7 />
        </div>
        <div className=" ">
          <OurProduct8 />
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

export default OurProducts;
