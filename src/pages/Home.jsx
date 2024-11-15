import { useContext, useEffect, useState } from "react";
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
import { testimonialsData } from "../utils/constant/testimonialData";

const Home = () => {
  const getSettings = () => {
    if (window.innerWidth <= 480) {
      return {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
      };
    } else if (window.innerWidth <= 768) {
      return {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
      };
    } else if (window.innerWidth <= 1024) {
      return {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
      };
    } else {
      return {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
      };
    }
  };
  const settings = getSettings();
  useEffect(() => {
    const handleResize = () => setSettings(getSettings());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className=" w-full px-4">
      <div className=" py-3">
        <Header />
      </div>
      <div className="center-contant h-full">
        {/* Banner */}
        <div className="w-full ">
          <Banner />
        </div>
        {/* Dual Banner  */}
        <div className=" p-3">
          <DualBanner />
        </div>
        {/* Featured Catagaries */}
        <div className="my-2">
          <h1 className="text-3xl p-5 font-semibold text-center md:text-start">
            Featured Catagaries
          </h1>
          <div className="slider-container px-10 ">
            <Slider {...settings}>
              {FeaturedCatagaryData?.FeaturedCatagary?.slice(0, 10).map(
                (item, key) => {
                  const { name, image } = item;
                  return (
                    <div className="catagaryCard " key={key}>
                      <Card
                        title={name}
                        description=""
                        images={image}
                        price=""
                      />
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
        {/* Featured Products */}
        <div className=" my-2">
          <h1 className="text-3xl p-5 font-semibold text-center md:text-start">
            Featured Products
          </h1>
          <div className="slider-container px-10">
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
                      title={title.slice(0, 20) + "..."}
                      description={description.slice(0, 28) + "..."}
                      images={image}
                      price={"$" + price}
                      icon={
                        <i class="fa-solid fa-cart-shopping text-black"></i>
                      }
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
        <div className=" my-2 ">
          <h1 className="text-3xl p-5 font-semibold text-center md:text-start">
            New Arrivals
          </h1>
          <div className="flex flex-wrap p-4 gap-3 justify-center ">
            {productData?.products?.slice(0, 12).map((item, key) => {
              const { title, description, images, price } = item;
              const arrivalCard =
                "arrivalCard md:w-[46%] lg:w-[30%] xl:w-[24%] ";
              return (
                <div className={arrivalCard} key={key} onClick={() => {}}>
                  <Card
                    title={title.slice(0, 22) + "..."}
                    description={description.slice(0, 33) + "..."}
                    images={images}
                    price={"$" + price}
                    icon={<i class="fa-solid fa-cart-shopping text-black"></i>}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* top Brand */}
        <div className="my-2">
          <h1 className="text-3xl p-5 font-semibold text-center md:text-start">
            Top Brands
          </h1>
          <div className="flex flex-wrap  gap-6 justify-center ">
            {productData?.products?.slice(12, 24).map((item, key) => {
              const { title, description, images, price } = item;
              return (
                <div
                  className="brandCard  md:w-[30%] lg:w-[20%] xl:w-[15%]"
                  key={key}
                >
                  <Card title={title.slice(0, 10)} images={images} />
                </div>
              );
            })}
          </div>
        </div>
        {/* testimonial */}
        <div className=" my-2">
          <h1 className="text-3xl p-5 font-semibold text-center md:text-start">
            Testimonial
          </h1>
          <div className="slider-container px-10  ">
            <Slider {...settings}>
                {testimonialsData?.map((item, key) => {
                  const { name, description, image } = item;
                  return (
                    <div className="p-3">
                      <div className="testimonalCard" key={key}>
                      <Card
                        title={name}
                        description={description}
                        images={image}
                      />
                    </div>
                    </div>
                  );
                })}
              
            </Slider>
          </div>

        </div>
        {/* footer*/}
        <div className="my-2 p-5 bg-black">
          <div className="flex bg-red-600 justify-between items-center w-[90%] m-auto">
          <div className=" cursor-pointer px-5 w-[20%] bg-slate-200">
          <img
            className=" object-contain rounded-lg w-[95px] md:w-[200px] "
            src="/assets/img/logo.svg"
            alt="LOGO." 
          />
        </div>
          <div className="flex justify-around items-center bg-slate-500 w-[80%]">
          <div className=" flex flex-col p-2 gap-3">
          <span><a href="">Facebook</a></span>
          <span><a href="">Instagram</a></span>
          <span><a href="">Youtube</a></span>
          <span><a href="">TikTok</a></span>
          </div>
          <div className=" flex flex-col p-2 gap-3">
          <span><a href="">Facebook</a></span>
          <span><a href="">Instagram</a></span>
          <span><a href="">Youtube</a></span>
          <span><a href="">TikTok</a></span>
          </div>
          
          </div>
          </div>
        </div>
      </div>
      {/* <div className="container py-3 fixed bottom-0 bg-white">
        <Header />
      </div> */}
    </div>
  );
};

export default Home;
