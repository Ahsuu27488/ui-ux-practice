import Image from "next/image";
import React from "react";

const HighlightedProduct = () => {
  return (
    <div>
      <div className="grid grid-cols-12 mx-32 pt-20 px-12 py-12 bg-black">
        <div className="col-span-5 flex flex-col gap-8">
          <h1 className="text-[#00FF66] font-semibold text-lg">Categories</h1>
          <h2 className=" font-semibold text-5xl text-[#FAFAFA]">
            Enhance Your Music Experience
          </h2>
          <Image src="/images/timer.png" width={320} height={62} alt="Timer" />
          <button className="bg-[#00FF66] text-[16px] font-medium px-12 py-3 rounded text-[#FAFAFA] w-[171px]">
            Buy Now!
          </button>
        </div>
        <div className="col-span-7 relative category-shadow">
          <div className="absolute inset-0 bg-[#D9D9D9] blur-2xl rounded-full opacity-30 -z-10"></div>

          <div className="relative flex justify-center items-center">
            <Image
              src="/images/speaker.png"
              width={568}
              height={330}
              alt="Product"
              className="scale-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedProduct;
