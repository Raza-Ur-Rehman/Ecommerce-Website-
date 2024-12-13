import React from "react";
import Slider from "react-slick";
import { bannerData } from "../utils/constant/BannerData";
import Button from "./common/Button";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="slider-container px-4 rounded-xl w-full">
      <Slider {...settings}>
        {bannerData.slice(0,3).map((item, key) => (
          <div key={key} className=" w-full h-full xl:h-[800px]">
            <img className=" rounded-xl object-contain xl:object-cover" src={item.images} alt="" />
            {/* <div className="relative ">
              <div className="flex justify-center gap-6 flex-col items-start absolute  w-3/5 h-full px-16 ">
                <h1 className="text-md text-black  font-light">
                  {item.title}
                </h1>
                <p className="text-md text-black ">
                  {item.subtitle}
                </p>
                <div className=" bg-slate-950 rounded-md text-white">
                <Button
                text="Go to Collection" 
                icon={<i class='fa-solid fa-arrow-right-long'></i>}
                link="/product"
                />
                </div>
              </div>
              <img
                className="w-full h-auto object-contain rounded-lg"
                src={item.images}
              />
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Banner;
