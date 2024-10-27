import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FeaturedProductContext = createContext();

export const FeaturedProductProvider = ({children}) => {
   const [FeaturedProducts, setFeaturedProducts] = useState([]);

   const getData = async () => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.in/api/products'
      );
      setFeaturedProducts(response?.data.products);
  
      
      
    } catch (error) {
      console.log(error);
      
    }
   };

   useEffect(() => {
    getData();
   }, []);

   return (
    <>
     <FeaturedProductContext.Provider value={{ FeaturedProducts, setFeaturedProducts }}>
       {children}
     </FeaturedProductContext.Provider>
    </>
   )

}