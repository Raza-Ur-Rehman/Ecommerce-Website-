import React, { useEffect, useState } from "react";
import Button from "./Button";

const Modal = ({ modal, setModal, data }) => {
  const [selectedImgData, setSelectedImgData] = useState(data);
  const { description, price, title, image,images } = selectedImgData || {};

  useEffect(() => {
    setSelectedImgData(data);
  }, [data]);

  return (
    <>
      {modal && (
        <div
          className=" h-full w-full fixed top-0 right-0 p-4 z-10 flex items-center justify-center bg-[#0000004d] "
          
        >
          <div className="flex h-[80%] w-[1000px] bg-white p-1 rounded-xl flex-col ">
          <button
              className="h-5 text-end text-2xl md:text-4xl z-10"
              onClick={() => setModal(false)}
            >
              <i class="fa-regular fa-circle-xmark "></i>
            </button>
            <div className="w-full h-[40%] md:h-[50%] p-2  ">
              <img
                className="object-contain w-full h-full rounded-l-xl "
                src={image}
                alt=""
              />
            </div>
            <div className=" p-2  flex justify-between w-full h-full">
              <div className="flex flex-col gap-3 ">
                <div className="h-full">
                <h2 className=" text-md md:text-xl text-[#1C2023] font-semibold p-2">
                  {title?.slice(0, 55)}
                </h2>
                <hr />

                <p className=" text-xs text-gray-400 p-2 md:text-sm">
                  {description?.slice(0, 500)}
                </p>
                </div>
                <div className="h-full w-full flex justify-between items-center">
                <h4 className="text-[#1C2023] text-xl md:text-2xl font-semibold p-2 ">
                  {"$" + price}
                </h4>
                <hr />
                <div className=" bg-[#1C2023]  text-white text-center flex justify-end p-2 md:p-4 md:px-6 text-2xl rounded-lg  ">
                  <Button
                    text={"Add to Cart"}
                    icon={<i class="fa-solid fa-cart-shopping"></i>}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
