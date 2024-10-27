import { DualBannerData } from "../utils/constant/BannerData";

const DualBanner = () => {
  return (
    <div className="container flex justify-between gap-6  ">
      {DualBannerData.map((item, key) => {
        return (
          <div key={key} className=" rounded-lg">
            <img className=" object-contain w-full h-[300px] rounded-lg " src={item.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;