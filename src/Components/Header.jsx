import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="flex bg-slate-500  p-3 items-center" >
        <div className="text-2xl font-medium">
            <h2>Logo.</h2>
        </div>
        <div className="flex gap-12 text-xl font-normal ">
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
      </div>
    </>
  )
}

export default Header
