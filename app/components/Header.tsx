import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-4 text-sm bg-[#000000] text-[#FAFAFA] py-2 ">
        <h1>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <h2 className="underline font-semibold">Shop now</h2>
        <h3 className="flex gap-2 translate-x-28 justify-end pr-30">
          English
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </h3>
      </div>
      <div className="flex px-32 justify-between items-center pt-8 py-6 border-b-gray-200 border-b">
        <h1 className="text-4xl font-bold"> Exclusive </h1>
        <div className="">
          <ul className="flex gap-8 font-normal ">
            <li className="focus:underline focus:underline-offset-1 hover:underline hover:underline-offset-1">
              Home{" "}
            </li>
            <li className="focus:underline focus:underline-offset-1 hover:underline hover:underline-offset-1">
              Contact
            </li>
            <li className="focus:underline focus:underline-offset-1 hover:underline hover:underline-offset-1">
              About
            </li>
            <li className="focus:underline focus:underline-offset-1 hover:underline hover:underline-offset-1">
              Sign Up
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <input
              placeholder="What are you looking for?"
              className="bg-[#F5F5F5] text-sm py-2 pr-10 pl-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="gap-3 flex items-center">
            {/* Wishlist  */}
            <a
              href="/wishlist"
              className="hover:scale-125 transition-all ease-in-out "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </a>
            <a
              href="/cart"
              className="hover:scale-125 transition-all ease-in-out "
            >
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;