import { bannerData } from "../utils/constant/BannerData"

const Banner = () => {
    const data = bannerData;
    const {title ,subtitle, image} = data
  return (
    <div>
      <div className="object-cover" style={{ backgroundImage: `url(${image})` }}>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        
      </div>
    </div>
  )
}

export default Banner
