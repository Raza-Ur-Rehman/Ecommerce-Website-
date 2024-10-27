import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FeaturedCatagaryContext = createContext();

export const FeaturedCatagaryProvider = ({ children }) => {
  const [FeaturedCatagary, setFeaturedCatagary] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setFeaturedCatagary(response?.data);
      // console.log(response?.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <FeaturedCatagaryContext.Provider
        value={{ FeaturedCatagary, setFeaturedCatagary }}
      >
        {children}
      </FeaturedCatagaryContext.Provider>
    </>
  );
};
