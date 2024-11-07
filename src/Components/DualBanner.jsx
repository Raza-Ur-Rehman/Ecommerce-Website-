import { DualBannerData } from "../utils/constant/BannerData";

const DualBanner = () => {
  return (
    <div className="flex justify-center  items-center gap-6 p-2 flex-col md:flex-row md:justify-between md:px-8">
      {DualBannerData.map((item, key) => {
        return (
          <div key={key}>
            <img className=" object-cover w-[700px] h-[350px]  rounded-lg " src={item.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;