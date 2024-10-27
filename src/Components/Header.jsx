import { useState } from "react";
import { NavLink } from "react-router-dom"
import Modal from "./common/Modal";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  console.log(modalShow);
  
  return (
    <>
      <div className="flex shadow-md rounded-xl p-3 px-14 items-center" >
        <div className="text-2xl font-semibold w-2/6 px-6 cursor-pointer">
            <h1>Logo.</h1>
        </div>
        <div className="flex gap-12 text-xl font-normal w-2/6 ">
            <NavLink to="/">
                <h3>Home</h3>
                {/* <div className="dot"></div> */}
            </NavLink>
            <NavLink to="/product">
                <h3>Product</h3>
                {/* <div className="dot"></div> */}
            </NavLink>
            <NavLink to="/contact">
                <h3>Contact</h3>
                {/* <div className="dot"></div> */}
            </NavLink>
        </div>
        <div className="flex w-2/6 px-6 font-medium justify-center gap-2">
            <NavLink >
                <h3>SignIn</h3>
                {/* <div className="dot"></div> */}
            </NavLink>
            <span>/</span>
            <NavLink >
                <h3>SignUp</h3>
                {/* <div className="dot"></div> */}
            </NavLink>
             {/* Modal   */}
      <div className="m-4">
        <Modal modal={modalShow} setModal={setModalShow}  />
      </div>
        </div>
      </div>
    </>
  )
}

export default Header
