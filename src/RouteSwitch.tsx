import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import products from "./assets/JSON/products.json";
import { ProductPage } from "./pages/ProductPage";

export const RouteSwitch = () => 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            {products.map((product, index) =>
                <Route key={index} path={`/products/${product.image}`} element={<ProductPage product={product} />} />
            )}
        </Routes>
    </BrowserRouter>;
