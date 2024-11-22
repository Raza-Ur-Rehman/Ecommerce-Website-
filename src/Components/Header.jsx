import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./common/Modal";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <div
        className="flex shadow-md rounded-xl p-3 items-center bg-white
      justify-between  header-section "
      >
        <div className=" cursor-pointer w-full px-5">
          <img
            className=" object-contain rounded-lg w-[95px] md:w-[140px] "
            src="/assets/img/logo.svg"
            alt="LOGO."
          />
        </div>
        <div className="md:flex hidden w-full">
          <div className="flex gap-12 text-xl font-normal w-full ">
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
          {/* w-2/6 */}
          <div className="w-full">
            <div className="flex font-medium justify-center items-center ">
              <button className="text-3xl ">
                <ShoppingCartOutlined />
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex px-6 font-medium justify-center gap-2">
              <NavLink>
                <button>SignIn</button>
                {/* <div className="dot"></div> */}
              </NavLink>
              <span>/</span>
              <NavLink>
                <button>SignUp</button>
                {/* <div className="dot"></div> */}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-full md:hidden items-center justify-end px-4 flex gap-6 ">
          <button className="text-3xl ">
                <ShoppingCartOutlined />
              </button>
          <button className="text-3xl" onClick={showLoading}>
            <MenuOutlined />
          </button>
        </div>
        <Drawer
          closable
          destroyOnClose
          title={<div className=" cursor-pointer w-full px-5 text">
            <img
              className=" object-contain rounded-lg w-[95px] md:w-[140px] "
              src="/assets/img/logo.svg"
              alt="LOGO."
            />
          </div>}
          placement="right"
          open={open}
          loading={loading}
          onClose={() => setOpen(false)}
        >
          <div className="flex gap-12 text-2xl w-full flex-col font-medium">
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
        </Drawer>
        {/* Modal   */}
        {/* <div className="m-4">
          <Modal modal={modalShow} setModal={setModalShow} />
        </div> */}
      </div>
    </>
  );
};

export default Header;
