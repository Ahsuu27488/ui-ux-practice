import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mx-32 pt-20 flex flex-col gap-10">
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
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-8 h-[600px]">
        <div className="col-span-2 row-span-2">
          <div className="bg-black w-[570px] h-[600px]  relative rounded">
            <Image
              src="/images/playstation.png"
              alt="Playstation"
              width={511}
              height={511}
              className="bottom-0 left-10 absolute"
            />
            <div className="absolute flex flex-col gap-4 justify-center items-start p-8 bottom-0 left-0">
              <h1 className="font-semibold text-2xl tracking-[0.03em] text-[#FAFAFA]">
                PlayStation 5
              </h1>
              <h1 className="text-lg font-normal text-[#FAFAFA]">
                Black and White version of the PS5 coming out on sale.
              </h1>
              <button className="font-medium text-lg hover:underline-offset-4 hover:underline text-[#FAFAFA]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 col-start-3 overflow-hidden">
          <div className="bg-[#000000] w-[570px] h-[294px]  relative rounded overflow-hidden">
            <Image
              src="/images/woman.png"
              alt="Woman"
              width={432}
              height={286}
              className="right-0 absolute bottom-0 h-full"
            />
            <div className="absolute flex flex-col gap-4 justify-center items-start p-8 bottom-0 left-0">
              <h1 className="font-semibold text-2xl tracking-[0.03em] text-[#FAFAFA]">
              Women’s Collections
              </h1>
              <h1 className="text-lg font-normal text-[#FAFAFA]">
              Featured woman collections that<br />
              give you another vibe.
              </h1>
              <button className="font-medium text-lg hover:underline-offset-4 hover:underline text-[#FAFAFA]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-1 col-start-3">
          <div className="bg-black w-[270px] h-[284px]  relative rounded">
            <div className="absolute flex justify-center items-center p-8 w-full h-full">
              <Image
                src="/images/featuredspeaker.png"
                alt="Playstation"
                width={190}
                height={221}
                className=""
              />
            </div>
            <div className="absolute flex flex-col gap-2 items-start justify-start bottom-0 left-0 scale-75">
              <h1 className="font-semibold text-2xl tracking-[0.03em] text-[#FAFAFA]">
              Speakers
              </h1>
              <h1 className="text-lg font-normal text-[#FAFAFA]">
              Amazon wireless speakers
              </h1>
              <button className="font-medium text-lg hover:underline-offset-4 hover:underline text-[#FAFAFA]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-1 col-start-4">
          <div className="bg-black w-[270px] h-[284px]  relative rounded">
            <div className="absolute flex justify-center items-center p-8 w-full h-full">
              <Image
                src="/images/perfume.png"
                alt="Playstation"
                width={201}
                height={203}
                className=""
              />
            </div>
            <div className="absolute flex flex-col gap-2 items-start justify-start bottom-0 left-0 scale-75">
              <h1 className="font-semibold text-2xl tracking-[0.03em] text-[#FAFAFA]">
              Perfume
              </h1>
              <h1 className="text-lg font-normal text-[#FAFAFA]">
              GUCCI INTENSE OUD EDP
              </h1>
              <button className="font-medium text-lg hover:underline-offset-4 hover:underline text-[#FAFAFA]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
