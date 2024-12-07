import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="mx-32 py-16">
      <h1 className="text-sm flex gap-4 pb-12">
        <a href="/" className="opacity-50 hover:opacity-100">
          Home
        </a>{" "}
        / <a href="/cart">Cart</a>
      </h1>
      <div>
        <div className="w-full flex flex-col gap-10">
          {/* Headings  */}
          <div className="cart-blur grid grid-cols-4 rounded py-5 px-10 text-base">
            <h1 className="col-span-1">Product</h1>
            <h1 className="col-span-1">Price</h1>
            <h1 className="col-span-1">Quantity</h1>
            <h1 className="col-span-1">Subtotal</h1>
          </div>

          {/* Products  */}
          <div className="cart-blur grid grid-cols-4 rounded py-7 px-10 text-base">
            <div className="col-span-1 flex gap-4 items-center">
              <Image
                src="/images/monitor.png"
                alt="Monitor"
                height={39}
                width={39}
              />
              <h1>LCD Monitor</h1>
            </div>
            <h1 className="col-span-1">$650</h1>
            <div className="col-span-1">
              <input
                type="number"
                name="quantity"
                min="1"
                value="1"
                max="1000"
                className="w-20 text-start border border-gray-400 rounded-lg py-1 px-2 text-xl appearance-none focus:outline-none"
              />
            </div>
            <h1 className="col-span-1">$650</h1>
          </div>
          <div className="cart-blur grid grid-cols-4 rounded py-7 px-10 text-base">
            <div className="col-span-1 flex gap-4 items-center">
              <Image
                src="/images/gamepad.png"
                alt="Monitor"
                height={39}
                width={39}
              />
              <h1>H1 Gamepad</h1>
            </div>
            <h1 className="col-span-1">$550</h1>
            <div className="col-span-1">
              <input
                type="number"
                name="quantity"
                min="1"
                value="2"
                max="1000"
                className="w-20 text-start border border-gray-400 rounded-lg py-1 px-2 text-xl appearance-none focus:outline-none"
              />
            </div>
            <h1 className="col-span-1">$1100</h1>
          </div>
          <div className="flex justify-between">
            <button className=" bg-transparent text-lg text-black font-medium py-3 px-12 rounded border border-gray-400">
              Return to Shop
            </button>
            <button className=" bg-transparent text-lg text-black font-medium py-3 px-12 rounded border border-gray-400">
              Update Cart
            </button>
          </div>
        </div>
        <div className="py-16 flex justify-between items-start">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-black rounded px-4 py-3 w-64 focus:outline-none"
            />
            <button className="bg-red-500 text-white rounded font-normal px-12 py-3 hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
          <div className="border border-black rounded px-6 py-9 flex flex-col">
            <h1 className="font-medium text-xl pb-4">Cart Total:</h1>
            <div className="flex justify-between border-b border-b-gray-400 py-2 gap-48">
              <h1>Subtotal</h1>
              <h1>$1765</h1>
            </div>
            <div className="flex justify-between border-b border-b-gray-400 py-2">
              <h1>Shipping Free</h1>
              <h1>Free</h1>
            </div>
            <div className="flex justify-between pb-4 py-2">
              <h1>Total</h1>
              <h1>$1765</h1>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-red-500 text-white rounded font-normal py-3 hover:bg-red-600 w-[220px]">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
