import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="pb-32">
      <div className="mx-32 pt-20 flex flex-col gap-10 pb-4 ">
        <div className="flex gap-24 pt- items-end justify-between">
          <div className="flex gap-24 items-end">
            <h1 className="font-normal text-black text-xl">Wishlist (4)</h1>
          </div>
          <div className="flex gap-2 h-12 pl-8 items-center justify-center">
            <button className=" bg-transparent text-lg text-black font-medium py-3 px-12 rounded border border-gray-400">
              Move All to Bag
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-16 overflow-x-auto">
          <div className="  ">
            <div className="w-[270px] ">
              <div className="relative w-[270px] h-[250px]">
                <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
                  <h1 className="font-normal text-xs text-[#FAFAFA] bg-[#DB4444] w-12 h-6 rounded-[4px] mx-4 my-3 flex justify-center items-center">
                    -35%
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="product-bg-height absolute">
                    <Image
                      src="/images/handbag.png"
                      alt="Handbag"
                      width={178}
                      height={129}
                    />
                  </div>
                  <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 pr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Add To Cart
                  </h1>
                </span>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <h1 className="font-medium text-lg">Gucci Duffle Bag</h1>
                <div className=" gap-3 flex font-normal text-lg text-[#DB4444]">
                  <p className="">$960</p>
                  <p className="line-through text-black opacity-50">$1160</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  ">
            <div className="w-[270px] ">
              <div className="relative w-[270px] h-[250px]">
                <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="product-bg-height absolute">
                    <Image
                      src="/images/gpu.png"
                      alt="Gamepad"
                      width={191}
                      height={95}
                    />
                  </div>
                  <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full bottom-0 transition-all duration-200 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 pr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Add To Cart
                  </h1>
                </span>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <h1 className="font-medium text-lg">RGB Liquid GPU Cooler</h1>
                <div className=" gap-3 flex font-normal text-lg text-[#DB4444]">
                  <p className="">$1960</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  ">
            <div className="w-[270px] h-[322px]">
              <div className="relative w-[270px] h-[250px]">
                <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
                  <h1 className="font-normal text-xs text-[#FAFAFA] bg-[#00FF66] w-12 h-6 rounded-[4px] mx-4 my-3 flex justify-center items-center">
                    NEW
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="product-bg-height absolute">
                    <Image
                      src="/images/product7.png"
                      alt="Gamepad"
                      width={178}
                      height={150}
                    />
                  </div>
                  <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 pr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Add To Cart
                  </h1>
                </span>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <h1 className="font-medium text-lg">
                  GP11 Shooter USB Gamepad
                </h1>
                <div className="items-center gap-3 flex">
                  <p className=" font-normal text-lg text-[#DB4444]">$120</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  ">
            <div className="w-[270px] h-[322px]">
              <div className="relative w-[270px] h-[250px]">
                <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="product-bg-height absolute">
                    <Image
                      src="/images/product8.png"
                      alt="Gamepad"
                      width={182}
                      height={176}
                    />
                  </div>
                  <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 pr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Add To Cart
                  </h1>
                </span>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <h1 className="font-medium text-lg">Quilted Saltin Jacket</h1>
                <div className="items-center gap-3 flex">
                  <p className=" font-normal text-lg text-[#DB4444]">$660</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Section  */}
      <div>
        <div className="mx-32 pt-20 flex flex-col gap-10  pb-4">
          <div className="flex gap-24 pb-8 items-end justify-between">
            <div className="flex gap-4 items-center ">
              <span className="bg-[#DB4444] h-8 w-4 rounded-sm"></span>
              <h1 className="text-[#000000] font-normal text-xl ">
                Just For You
              </h1>
            </div>
            <div className="flex gap-2 h-12 pl-8 items-center justify-center">
              <button className=" bg-transparent text-lg text-black font-medium py-3 px-12 rounded border border-gray-400">
                See All
              </button>
            </div>
          </div>
          <div className="flex justify-between  gap-16 overflow-x-auto">
            <div className="  ">
              <div className="w-[270px] h-[322px]">
                <div className="relative w-[270px] h-[250px]">
                  <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
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
                    </div>
                    <div className="product-bg-height absolute">
                      <Image
                        src="/images/product3.png"
                        alt="Gamepad"
                        width={162}
                        height={180}
                      />
                    </div>
                    <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Add To Cart
                    </h1>
                  </span>
                </div>
                <div className="flex flex-col gap-2 justify-end">
                  <h1 className="font-medium text-lg">
                    ASUS FHD Gaming Laptop
                  </h1>
                  <div className="items-center gap-3 flex">
                    <p className=" font-normal text-lg text-[#DB4444]">$700</p>
                    <div className=" flex gap-2">
                      <Image
                        src="/images/fivestar.png"
                        alt="Apple Logo"
                        width={100}
                        height={20}
                      />
                      <p className="font-semibold text-sm opacity-50">(325)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className="w-[270px] ">
                <div className="relative w-[270px] h-[250px] ">
                  <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
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
                    </div>
                    <div className="product-bg-height absolute">
                      <Image
                        src="/images/monitor.png"
                        alt="Monitor"
                        width={170}
                        height={129}
                      />
                    </div>
                    <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Add To Cart
                    </h1>
                  </span>
                </div>
                <div className="flex flex-col gap-2 justify-end">
                  <h1 className="font-medium text-lg">
                    IPS LCD GAMING MONITOR
                  </h1>
                  <div className=" gap-3 flex font-normal text-lg text-[#DB4444]">
                    <p className="">$370</p>
                    <p className="line-through text-black opacity-50">$400</p>
                  </div>
                  <div className=" flex gap-2">
                    <Image
                      src="/images/fivestar.png"
                      alt="Apple Logo"
                      width={100}
                      height={20}
                    />
                    <p className="font-semibold text-sm opacity-50">(99)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className="w-[270px] ">
                <div className="relative w-[270px] h-[250px]">
                  <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
                    <h1 className="font-normal text-xs text-[#FAFAFA] bg-[#00FF66] w-12 h-6 rounded-[4px] mx-4 my-3 flex justify-center items-center">
                      NEW
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
                    </div>
                    <div className="product-bg-height absolute">
                      <Image
                        src="/images/gamepad.png"
                        alt="Gamepad"
                        width={172}
                        height={152}
                      />
                    </div>
                    <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Add To Cart
                    </h1>
                  </span>
                </div>
                <div className="flex flex-col gap-2 justify-end">
                  <h1 className="font-medium text-lg">HAVIT HV-G92 Gamepad</h1>
                  <div className=" gap-3 flex font-normal text-lg text-[#DB4444]">
                    <p className="">$120</p>
                    <p className="line-through text-black opacity-50">$160</p>
                  </div>
                  <div className=" flex gap-2">
                    <Image
                      src="/images/fivestar.png"
                      alt="Apple Logo"
                      width={100}
                      height={20}
                    />
                    <p className="font-semibold text-sm opacity-50">(88)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className="w-[270px] ">
                <div className="relative w-[270px] h-[250px]">
                  <span className=" absolute rounded-[4px] w-[270px] h-[250px] top-0 bg-[#F5F5F5] group overflow-hidden">
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
                    </div>
                    <div className="product-bg-height absolute">
                      <Image
                        src="/images/monitor.png"
                        alt="Monitor"
                        width={170}
                        height={129}
                      />
                    </div>
                    <h1 className="absolute bg-black font-medium flex justify-center items-center text-white py-1 w-full  bottom-0 transition-all duration-200 ease-in-out">
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
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Add To Cart
                    </h1>
                  </span>
                </div>
                <div className="flex flex-col gap-2 justify-end">
                  <h1 className="font-medium text-lg">
                    IPS LCD GAMING MONITOR
                  </h1>
                  <div className=" gap-3 flex font-normal text-lg text-[#DB4444]">
                    <p className="">$370</p>
                    <p className="line-through text-black opacity-50">$400</p>
                  </div>
                  <div className=" flex gap-2">
                    <Image
                      src="/images/fivestar.png"
                      alt="Apple Logo"
                      width={100}
                      height={20}
                    />
                    <p className="font-semibold text-sm opacity-50">(99)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
