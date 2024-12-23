import { useContext, useState } from "react";
import Header from "../Components/Header";
import { FeaturedProductContext } from "../Context/FeaturedProductsContext";
import Card from "../Components/common/Card";
import Modal from "../Components/common/Modal";
import Footer from "../Components/Footer";

const Product = () => {
  const FeaturedProductData = useContext(FeaturedProductContext);
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
    <div>
      <div className="my-3">
        <Header />
      </div>
      <div className=" my-5 p-4  ">
        {/* Modal   */}
        <div className="m-4">
          <Modal modal={modalShow} setModal={setModalShow} data={isfilter} />
        </div>
        <div className="">

        </div>
          <h1 className="text-3xl p-4 font-semibold">AllProducts</h1>
        <div className="px-2 flex flex-wrap gap-4 justify-center">
          {FeaturedProductData?.FeaturedProducts?.map((item, key) => {
            const { title, description, image, price } = item;
            return (
              <div
                className="arrivalCard md:w-[48%] lg:w-[30%] xl:w-[24%] "
                key={key}
                onClick={() => findId(item.id)}
              >
                <Card
                  title={title.slice(0, 23) + "..."}
                  description={description.slice(0, 30) + "..."}
                  images={image}
                  price={"$" + price}
                  icon={<i class="fa-solid fa-cart-shopping text-black"></i>}
                />
              </div>
            );
          })}

        </div>
      </div>
      {/* footer*/}
      <div className=" p-2">
          <Footer />
        </div>
    </div>
  );
};

export default Product;
