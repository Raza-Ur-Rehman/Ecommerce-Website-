import { DualBannerData } from "../utils/constant/BannerData";

const DualBanner = () => {
  return (
    <div className="flex justify-center  items-center gap-6 p-2 flex-col md:flex-row md:justify-between md:px-8">
      {DualBannerData.map((item, key) => {
        return (
          <div key={key} className="w-[250px]  md:w-full md:h-[200px] xl:h-[350px]  ">
            <img className=" object-contain lg:object-cover rounded-lg " src={item.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;