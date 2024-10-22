import Contact from "../pages/Contact"
import Product from "../pages/Product"
import Home from "../pages/Home"

const Index = () => [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/product",
        element: <Product/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
]

export default Index
