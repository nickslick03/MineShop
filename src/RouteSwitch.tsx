import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import products from "./assets/JSON/products.json";
import { ProductPage } from "./pages/ProductPage";
import { useCart } from "./hooks/useCart";

export const RouteSwitch = () => {
    
    const { cart, addToCart, removeFromCart } = useCart();
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
                <Route path='/products' element={<Products cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
                {products.map((product, index) =>
                    <Route 
                    key={index} 
                    path={`/products/${product.image}`} 
                    element={
                            <ProductPage product={product} 
                            cart={cart}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}/>
                        } 
                    />
                )}
            </Routes>
        </BrowserRouter>
    );
}
    
