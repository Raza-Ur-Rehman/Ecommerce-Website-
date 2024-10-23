
import { useContext } from "react"
import Button from "../Components/common/Button"
import Card from "../Components/common/Card"
import Header from "../Components/Header"
import { ProductContext } from "../Context/ProductContext"

const Home = () => {
  const productData = useContext(ProductContext);
  return (
    <div>
      <Header/>
      {/* <Button text="go to collection"/> */}
      <div className="flex flex-wrap bg-slate-300">
        {productData?.products?.map((item, key) => {
          const {title,description,images,price,} = item;
          return (
            // <Card
            //   key={key}
            //   title={title}
            //   description={description}
            //   images={images}
            //   price={price}/>
            <div key={key} className="w-1/3 p-6">
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
  )
}

export default Home
