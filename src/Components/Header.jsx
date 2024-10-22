import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="flex bg-slate-500  p-3 px-16 items-center" >
        <div className="text-2xl font-semibold w-2/6 px-6 ">
            <h1>Logo.</h1>
        </div>
        <div className="flex gap-12 text-xl font-normal w-2/6  ">
            <NavLink to="/">
                <h3>Home</h3>
            </NavLink>
            <NavLink to="/product">
                <h3>Product</h3>
            </NavLink>
            <NavLink to="/contact">
                <h3>Contact</h3>
            </NavLink>
        </div>
        <div className="w-2/6 px-6 font-normal text-end">
            <h3>Login/Signup</h3>
        </div>
      </div>
    </>
  )
}

export default Header
