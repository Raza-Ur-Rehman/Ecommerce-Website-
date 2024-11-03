import { DualBannerData } from "../utils/constant/BannerData";

const DualBanner = () => {
  return (
    <div className="container flex justify-between gap-6 flex-col ">
      {DualBannerData.map((item, key) => {
        return (
          <div key={key} className=" bg-cyan-400">
            <img className=" object-contain w-full h-full rounded-lg " src={item.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;