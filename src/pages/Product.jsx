import { useContext } from "react";
import Header from "../Components/Header";
import { FeaturedProductContext } from "../Context/FeaturedProductsContext";
import Card from "../Components/common/Card";

const Product = () => {
  const FeaturedProductData = useContext(FeaturedProductContext);
  return (
    <div>
      <div className="my-3">
        <Header />
      </div>
      <div className=" my-5 p-4  ">
        <h1 className="text-3xl p-4 font-semibold">AllProducts</h1>
        <div className="px-2 flex flex-wrap gap-4">
          {FeaturedProductData?.FeaturedProducts?.map((item, key) => {
            const { title, description, image, price } = item;
            return (
              <div className="arrivalCard " key={key}>
                <Card
                  title={title.slice(0,23) + "..."}
                  description={description.slice(0,30) + "..."}
                  images={image}
                  price={"$"+price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
