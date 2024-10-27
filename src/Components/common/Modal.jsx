import React, { useEffect, useState } from "react";
import Button from "./Button";

const Modal = ({ modal, setModal, data }) => {
  const [selectedImgData, setSelectedImgData] = useState(data);
  //   const {  description, price, title } = selectedImgData?.data;

  useEffect(() => setSelectedImgData(data), [data]);
  console.log(selectedImgData);

  return (
    <>
      {modal && (
        <div className=" h-full w-full fixed top-0 right-0 z-10 flex items-center justify-center bg-[#0000004d] ">
          <div className="flex h-[500px] w-[1000px] bg-white rounded-xl">
            <div className="w-h-full  p-2">
              <img
                className="object-contain w-full h-full rounded-l-xl "
                src={selectedImgData?.image}
                alt=""
              />
            </div>
            <div className="w-1/2 bg-slate-600 relative p-2 flex justify-between">
              <button
                className="absolute top-0 right-0 m-2 text-2xl  rounded-full p-2"
                onClick={() => setModal(false)}
              >
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
              <div className="flex flex-col gap-3 my-3 px-4 ">
              <h2 className="text-xl text-[#1C2023] font-semibold h-[30%] p-2 ">
                {selectedImgData?.title}
              </h2>
                <h4 className="text-[#1C2023] text-xl font-semibold h-[10%] p-2">
                  {"$"+ selectedImgData?.price}
                </h4>
              <p className="my-3 text-xs  h-1/2 text-gray-400 p-2">
                {selectedImgData?.description.slice(0,550)}
              </p>
              <div className=" bg-[#1C2023] text-white flex justify-center text-2xl h-[10%] rounded-lg ">
                <Button text="Add to Cart" />
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
