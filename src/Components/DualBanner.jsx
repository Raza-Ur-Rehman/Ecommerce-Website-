import { DualBannerData } from "../utils/constant/BannerData";

const DualBanner = () => {
  return (
    <div className="flex justify-center  items-center gap-7 p-2 flex-col md:flex-row md:justify-between">
      {DualBannerData.map((item, key) => {
        return (
          <div key={key} className="w-[100%] h-full md:w-full md:h-[200px] xl:h-[350px]  ">
            <img className=" object-contain lg:object-cover rounded-lg " src={item.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;