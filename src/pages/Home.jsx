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
    slidesToShow: 4,
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
    <div className="">
      {/* Header  */}
      <div className="my-3">
        <Header />
      </div>
      {/* Banner */}
      <div className="container">
        <Banner />
      </div>
      {/* Dual Banner  */}
      <div className="container  flex justify-between gap-2 my-6 p-4">
        <DualBanner />
      </div>
      {/* Featured Catagaries */}
      <div className=" my-5 p-4  ">
        <h1 className="text-3xl p-4 font-semibold">Featured Catagaries </h1>
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
      <div className=" my-5 p-4  ">
        <h1 className="text-3xl p-4 font-semibold">Featured Products</h1>
        <div className="slider-container px-3">
          <Slider {...settings}>
            {FeaturedProductData?.FeaturedProducts?.map((item, key) => {
              const { title, description, image, price } = item;
              return (
                <div
                  className="FlashCard  "
                  key={key}
                  onClick={() => findId(item.id)}
                >
                  <Card
                    title={title.slice(0, 20) + "..."}
                    description={description.slice(0, 30) + "..."}
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
      <div className="">
        <h1 className="text-3xl px-8 py-4 font-semibold">New Arrivals</h1>
        <div className="flex flex-wrap p-3 gap-4">
          {productData?.products?.slice(0, 12).map((item, key) => {
            const { title, description, images, price } = item;
            const arrivalCard = "arrivalCard";
            return (
              <div key={key} className={arrivalCard}>
                <Card
                  title={title.slice(0, 25) + "..."}
                  description={description.slice(0, 35) + "..."}
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
