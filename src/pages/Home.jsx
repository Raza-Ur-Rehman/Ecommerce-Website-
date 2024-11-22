import { useContext, useEffect, useState } from "react";
import Card from "../Components/common/Card";
import Header from "../Components/Header";
import { ProductContext } from "../Context/ProductContext";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
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
  // const [isProductFilter, setisProductFilter] = useState(
  //   productData.products
  // console.log(productData.products);
  const [modalShow, setModalShow] = useState(false);

  const style = {
    backgroundImage: "url(/assets/img/subscription-bg.png)",
  };

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
                    <div
                      className="catagaryCard hover:-translate-y-2"
                      key={key}
                    >
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
                    className="FlashCard hover:-translate-y-2"
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
          <Modal modal={modalShow} setModal={setModalShow} data={isfilter}/>
          {/* <Modal modal={modalShow} setModal={setModalShow} data={isProductFilter} /> */}
        </div>
        {/*Arrival  card */}
        <div className=" my-2 ">
          <h1 className="text-3xl p-5 font-semibold text-center md:text-start">
            New Arrivals
          </h1>
          <div className="flex flex-wrap p-4 gap-3 justify-center ">
            {productData?.products?.slice(0, 15).map((item, key) => {
              const { title, description, images, price } = item;
              return (
                <div
                  className="arrivalCard md:w-[30%] lg:w-[24%] xl:w-[18%] hover:-translate-y-2 hover:shadow-lg"
                  key={key}
                  // onClick={() => {}}
                  // onClick={() => productFindId(item.id)}
                >
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
                  className="brandCard  md:w-[30%] lg:w-[20%] xl:w-[15%] hover:-translate-y-2"
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
                    <div
                      className="testimonalCard hover:-translate-y-2 "
                      key={key}
                    >
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
        {/* subscription  */}
        <div className="my-2 p-6">
        <div className="px-6 sm:px-8 md:px-16 2xl:px-24 relative overflow-hidden flex flex-col sm:items-center xl:items-start rounded-lg bg-gray-100 py-10 md:py-14 lg:py-16">
          <div className="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5">
              Get Expert Tips In Your Inbox
            </h3>
            <p className="text-xs leading-6 text-body md:text-sm md:leading-7">
              Subscribe to our newsletter and stay updated.
            </p>
          </div>
          <form className="flex-shrink-0 w-full sm:w-96 md:w-[545px] md:mt-7 ">
            <div class="flex flex-col items-start justify-end sm:flex-row">
              <div class="w-full">
                <input
                  id="subscription_email"
                  name="subscription_email"
                  type="email"
                  placeholder="Write your email here"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12  bg-white border-gray-300 focus:outline-none focus:border-heading  md:h-12  lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right  rounded-md"
                  autocomplete="off"
                  spellcheck="false"
                  aria-invalid="false"
                />
              </div>
             <div className="text-white bg-black px-7 py-4 rounded-md hover:bg-gray-800">
             <Button
                text="Subscribe"
                icon={<i class="fa-solid fa-arrow-right-long"></i>}
                type="submit"
                link="/contact"
              />
             </div>
            </div>
          </form>
          <div
            style={style}
            className="hidden z-0 xl:block bg-no-repeat bg-right xl:-right-24 2xl:-right-20 3xl:right-0 bg-contain xl:bg-cover 3xl:bg-contain absolute h-full w-full top-0"
          ></div>
        </div>
        </div>
        {/* footer*/}
        <div className=" p-2">
          <Footer />
        </div>
      </div>
      {/* <div className=" py-3 fixed bottom-0 bg-white md:hidden ">
        <Header />
      </div> */}
    </div>
  );
};

export default Home;
