import { bannerData } from "../utils/constant/BannerData"
import Button from "./common/Button";

const Banner = () => {
    bannerData.map((item, index) => {
      const {title ,subtitle, images} = item;
      return (
        <div key={index}>
          <img src={images || "/assets/img/defaultImg.png" } alt="Placeholder"  onError={(e) => e.target.src = "/assets/img/defaultImg.png"}/>
          <h1 className="text-3xl font-semibold">{title} </h1>
          <p className="text-lg">{subtitle}</p>
          <Button text="Go to Collection"/>
        </div>
      )
})
    
  // return (
  //   <div>
  //     <div className="slider-container" >
  //       <img src={images || "/assets/img/defaultImg.png" } alt="Placeholder"  onError={(e) => e.target.src = "/assets/img/defaultImg.png"}/>
  //       <h1 className="text-3xl font-semibold">{title} ihhjsfdh</h1>
  //       <p className="text-lg">{subtitle}hdsfjkhkhsdjk</p>
  //       <Button text="Go to Collection"/>
  //     </div>
  //   </div>
  // )
}

export default Banner
