import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const RouteSwitch = () => 
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<h1>Products</h1>}/>
        </Routes>
    </BrowserRouter>;
