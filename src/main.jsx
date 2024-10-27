import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { FeaturedProductProvider } from "./Context/FeaturedProductsContext.jsx";
import { FeaturedCatagaryProvider } from "./Context/FeaturedCatagaryContaxt.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <FeaturedProductProvider>
        <FeaturedCatagaryProvider>
          <App />
        </FeaturedCatagaryProvider>
      </FeaturedProductProvider>
    </ProductProvider>
  </BrowserRouter>
);
