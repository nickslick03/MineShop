import { useState } from "react";
import { CartProps } from "../hooks/useCart";
import { CartAndQuantity } from "./CartAndQuantity";
import { CartProduct } from "./CartProduct";
import { PriceDisplay } from "./PriceDisplay";

export const CartSidebar = ({
    addToCart,
    removeFromCart,
    cart,
}: CartProps) => {
    
    const [ isVisible, setIsVisible ] = useState(false);

    const switchVisibility = () => setIsVisible(!isVisible);

    return <>
        <div 
        className="text-2xl drop-shadow-half-black select-none hover:drop-shadow-black transition"
        onClick={switchVisibility}>
            🛒
        </div>
        <div 
        className="fixed top-0 left-0 w-full h-screen bg-opacity-50 bg-slate-800"
        style={{visibility: isVisible ? 'visible' : 'hidden'}}
        onClick={switchVisibility}>
        </div>
        <div 
        className="fixed top-0 right-0 w-60 h-screen bg-gradient-to-r from-green-500 to-green-600 overflow-y-auto"
        style={{visibility: isVisible ? 'visible' : 'hidden'}}>
            <h2 className="text-3xl text-center mt-8">
                Cart
            </h2>
            <div 
            className="text-2xl absolute top-1 right-2 select-none rounded-md p-1 hover:bg-opacity-50 hover:bg-black hover:text-white transition"
            onClick={switchVisibility}>
                X
            </div>
            <div className="p-4 flex flex-col gap-14">
                {cart.map((cartItem, index) => 
                <div 
                key={index}
                className="flex flex-col gap-2">
                    <CartProduct cartItem={cartItem}/>
                    <CartAndQuantity 
                    product={cartItem.product}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    maxQuantity={cartItem.product.maxQuantity}/>
                </div>)}
                {cart.length > 0
                ? <button 
                className=" sticky bottom-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded drop-shadow-half-black">
                    CHECKOUT
                    <div className="flex justify-center gap-3">
                        Total: 
                        <PriceDisplay 
                        price={cart
                            .map(cartItem =>
                                cartItem.product.price * cartItem.quantity)
                            .reduce((prev, curr) =>
                                prev + curr)} />
                    </div>
                </button>
                : 'Buy something!'}
            </div>
        </div>
    </>;
};
