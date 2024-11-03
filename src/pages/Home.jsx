import { useContext, useState } from "react";
import Card from "../Components/common/Card";
import Header from "../Components/Header";
import { ProductContext } from "../Context/ProductContext";
import Banner from "../Components/Banner";

import { FeaturedProductContext } from "../Context/FeaturedProductsContext";
import DualBanner from "../Components/DualBanner";
import Slider from "react-slick";
import { FeaturedCatagaryContext } from "../Context/FeaturedCatagaryContaxt";
import Modal from "../Components/common/Modal";
import Button from "../Components/common/Button";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };
  const productData = useContext(ProductContext);
  const FeaturedProductData = useContext(FeaturedProductContext);
  const FeaturedCatagaryData = useContext(FeaturedCatagaryContext);

  const findId = (id) => {
    const filteredData = FeaturedProductData.FeaturedProducts.find(
      (item) => item.id == id
    );
    setModalShow(true);
    setIsFilter(filteredData);
  };

  const [isfilter, setIsFilter] = useState(
    FeaturedProductData.FeaturedProducts[0]
  );
  // console.log(isfilter);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container w-full">
      {/* Header  */}
      <div className="container py-3">
        <Header />
      </div>
      {/* Banner */}
      <div className="container w-full">
        <Banner />
      </div>
      {/* Dual Banner  */}
      <div className="container p-3">
        <DualBanner />
      </div>
      {/* Featured Catagaries */}
      <div className="container my-2">
        <h1 className="text-3xl p-5 font-semibold text-center">Featured Catagaries </h1>
        <div className="slider-container px-3 ">
          <Slider {...settings}>
            {FeaturedCatagaryData?.FeaturedCatagary?.slice(0, 10).map(
              (item, key) => {
                const { name, image } = item;
                return (
                  <div className="catagaryCard " key={key}>
                    <Card title={name} description="" images={image} price="" />
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>
      {/* Featured Products */}
      <div className="container my-2">
        <h1 className="text-3xl p-5 font-semibold text-center"> Featured Products</h1>
        <div className="slider-container px-3">
          <Slider {...settings}>
            {FeaturedProductData?.FeaturedProducts?.map((item, key) => {
              const { title, description, image, price } = item;
              return (
                <div
                  className="FlashCard"
                  key={key}
                  onClick={() => findId(item.id)}
                >
                  <Card
                    title={title.slice(0, 18) + "..."}
                    description={description.slice(0, 25) + "..."}
                    images={image}
                    price={"$" + price}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* Modal   */}
      <div className="m-4">
        <Modal modal={modalShow} setModal={setModalShow} data={isfilter} />
      </div>
      {/*Arrival  card */}
      <div className="container my-2 ">
        <h1 className="text-3xl p-5 font-semibold text-center">New Arrivals</h1>
        <div className="flex flex-wrap p-4 gap-3 justify-center ">
          {productData?.products?.slice(0, 12).map((item, key) => {
            const { title, description, images, price } = item;
            const arrivalCard = "arrivalCard md:w-[48%] lg:w-[30%] xl:w-[24%]";
            return (
              <div className={arrivalCard} key={key} onClick={() => {}}>
                <Card
                  title={title.slice(0, 22) + "..."}
                  description={description.slice(0, 33) + "..."}
                  images={images}
                  price={"$" + price}
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
