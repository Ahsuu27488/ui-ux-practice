import Image from "next/image";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import FlashSales from "./components/FlashSales";
import HeroSection from "./components/HeroSection";
import HighlightedProduct from "./components/HighlightedProduct";
import OurProducts from "./components/OurProducts";
import TopSelling from "./components/TopSelling";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <Categories />
      <TopSelling />
      <HighlightedProduct />
      <OurProducts />
      <Featured />
      <div className=" flex gap-[88px] justify-center items-center mx-32 py-20">
        <div className="flex flex-col gap-6  justify-center items-center">
          <Image src="/images/deliveryicon.png" alt="Delivery Icon" width={80} height={80}/>
          <h1 className="text-xl font-bold text-black">FREE AND FAST DELIVERY</h1>
          <h1 className="font-normal text-lg text-black">Free delivery for all orders over $140</h1>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <Image src="/images/callserviceicon.png" alt="Call Service" width={80} height={80}/>
          <h1 className="text-xl font-bold text-black">24/7 CUSTOMER SERVICE</h1>
          <h1 className="font-normal text-lg text-black">Friendly 24/7 customer support</h1>
        </div>
        <div className="flex flex-col gap-6  justify-center items-center">
          <Image src="/images/gaurantee.png" alt="Gaurantee Icon" width={80} height={80}/>
          <h1 className="text-xl font-bold text-black">MONEY BACK GUARANTEE</h1>
          <h1 className="font-normal text-lg text-black">We return money within 30 days</h1>
        </div>
      </div>
    </div>
  );
}
