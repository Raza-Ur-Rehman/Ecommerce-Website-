import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
   const [products, setProducts] = useState(null);

   const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.escuelajs.co/api/v1/products'
      );
      setProducts(response?.data);
      
    } catch (error) {
      console.log(error);
      
    }
   };
   

   useEffect(() => {
    getData();
   }, []);

   return (
    <>
     <ProductContext.Provider value={{ products, setProducts }}>
       {children}
     </ProductContext.Provider>
    </>
   )

}