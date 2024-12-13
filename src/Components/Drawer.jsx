import React from 'react'

const Drawer = () => {
  return (
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
  )
}

export default Drawer
