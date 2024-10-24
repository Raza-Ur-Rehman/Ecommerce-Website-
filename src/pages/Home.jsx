import { useContext } from "react";
import Button from "../Components/common/Button";
import Card from "../Components/common/Card";
import Header from "../Components/Header";
import { ProductContext } from "../Context/ProductContext";
import Banner from "../Components/Banner";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,}
  const productData = useContext(ProductContext);
  return (
    <div className="">
      <div className="my-3">
        <Header />
      </div>
      {/* banner */}
      <div className="">
      {/* <Slider {...settings}>
      <Banner />
      </Slider> */}
      </div>
      {/* Featured Products */}
      <div className="bg-green-300 mb-3 h-auto">
        <h1 className="text-3xl px-8 pt-4 font-semibold">Featured Products</h1>
        <div className="flex p-4 gap-4">
          {productData?.products?.slice(0, 4).map((item, key) => {
            const { title, description, images, price } = item;

            const cardClass =
              key === 0 || key === 3 ? "w-full h-[500px]" : "w-1/2 h-1/2";

            return (
              <div key={key} className={`${cardClass}bg-white  p-4 flex flex-col items-center`}>
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
      {/* card */}
      <div className=" bg-slate-300">
        <h1 className="text-3xl px-8 pt-4 font-semibold">New Arrivals</h1>
        <div className="flex flex-wrap p-2">
          {productData?.products?.slice(0, 12).map((item, key) => {
            const { title, description, images, price } = item;
            return (
              <div key={key} className="w-1/4 p-5 h-[500px] flex flex-wrap ">
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
