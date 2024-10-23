import Slider from "react-slick";
import { BannerData } from "../utils/constant/BannerData";
import Button from "./common/Button";

const Banner = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   // autoplaySpeed: 4500,
  // };
  return (
    <>
      <div className="slider-container">
          {BannerData.map((item, key) => {
            const { title, subtitle, image } = item;
            return ( 
              <>
              <div
              key={key}
              className="w-full p-[12px] text-lg rounded-lg text-center items-center cursor-pointer flex justify-center bg-slate-600 relative"
            >
              <img
                className="object-cover h-[450px] w-full "
                src={image}
                alt={title}
              />
              <div className="absolute top-[50px] w-1/2 bg-slate-500">
                <h2 className="">{item.title}</h2>
                <p>{subtitle}</p>
                <Button
                  text="Go to Collection"
                  icon={
                    <i className="fa-solid fa-arrow-right-long text-xl"></i>
                  }
                />
              </div>
            </div>
              </>
            );
})}
      </div>
    </>
  )
}

export default Banner;
