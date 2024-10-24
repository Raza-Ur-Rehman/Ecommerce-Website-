import { bannerData } from "../utils/constant/BannerData"
import Button from "./common/Button";

const Banner = () => {
    const {title ,subtitle, images} = bannerData;
    
  return (
    <div>
      <div className="slider-container" >
        <img src={images || "/assets/img/defaultImg.png" } alt="Placeholder"  onError={(e) => e.target.src = "/assets/img/defaultImg.png"}/>
        <h1 className="text-3xl font-semibold">{title} ihhjsfdh</h1>
        <p className="text-lg">{subtitle}hdsfjkhkhsdjk</p>
        <Button text="Go to Collection"/>
      </div>
    </div>
  )
}

export default Banner
