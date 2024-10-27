import React, { useEffect, useState } from "react";
import Button from "./Button";

const Modal = ({ modal, setModal, data }) => {
  const [selectedImgData, setSelectedImgData] = useState(data);
  const { description, price, title, image } = selectedImgData || {};

  useEffect(() => {
      setSelectedImgData(data);
  }, [data]);

 


  return (
    <>
      {modal && (
        <div className=" h-full w-full fixed top-0 right-0 z-10 flex items-center justify-center bg-[#0000004d] " onClick={() => setModal(false)}>
          <div className="flex h-[500px] w-[1000px] bg-white rounded-xl">
            <div className="w-h-full  p-2">
              <img
                className="object-contain w-full h-full rounded-l-xl "
                src={image}
                alt=""
              />
            </div>
            <div className="w-1/2 relative p-2 flex justify-between">
              <button
                className="absolute top-0 right-0 text-3xl p-2 rounded-full"
                onClick={() => setModal(false)}
              >
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
              <div className="flex flex-col gap-3 my-3 px-4 ">
              <h2 className="text-xl text-[#1C2023] font-semibold h-[30%] p-2 ">
                {title}
              </h2>
              <hr />
                <h4 className="text-[#1C2023] text-xl font-semibold h-[8%] p-2">
                  {"$"+price}
                </h4>
                
              <p className=" text-xs  h-1/2 text-gray-400 p-2 ">
                {description?.slice(0,550)}
              </p>
              <hr  />
              <div className=" bg-[#1C2023] text-white flex justify-center  text-2xl h-[10%] rounded-lg ">
                <Button  text={"Add to Cart"} icon={<i class="fa-solid fa-cart-shopping"></i>}/>
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
