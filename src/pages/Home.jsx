import { useContext } from "react";
import Card from "../Components/common/Card";
import Header from "../Components/Header";
import { ProductContext } from "../Context/ProductContext";
import Banner from "../Components/Banner";

import { FeaturedProductContext } from "../Context/FeaturedProductsContext";
import DualBanner from "../Components/DualBanner";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  const productData = useContext(ProductContext);
  const FeaturedProductData = useContext(FeaturedProductContext);
  return (
    <div className="">
      <div className="my-3">
        <Header />
      </div>
      {/* banner */}
      <div className="container">
        <Banner />
      </div>

      <div className="container  flex justify-between gap-2 my-6 p-4">
        <DualBanner />
      </div>
      {/* Featured Products */}
      <div className=" my-5 p-4  ">
        <h1 className="text-3xl p-4 font-semibold">Featured Products</h1>
        <div className="slider-container px-3">
          <Slider {...settings}>
            {FeaturedProductData?.FeaturedProducts?.map(
              (item, key) => {
                const { title, description, image, price } = item;
                return (
                    <div className= 'FlashCard  ' key={key}>
                      <Card
                        title={title}
                        description={description}
                        images={image}
                        price={price}
                      />
                    </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>

      {/*Arrival  card */}
      <div className="">
        <h1 className="text-3xl px-8 py-4 font-semibold">New Arrivals</h1>
        <div className="flex flex-wrap p-3 gap-4">
          {productData?.products?.slice(0, 12).map((item, key) => {
            const { title, description, images, price } = item;
            const arrivalCard = "arrivalCard";
            return (
              <div key={key} className={arrivalCard}>
                <Card
                  title={title}
                  description={description}
                  images={images}
                  price={price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
