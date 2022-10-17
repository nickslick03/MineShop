import { CartProps } from "../hooks/useCart";
import { CartSidebar } from "./CartSidebar";

export const Header = ({
    cart,
    addToCart,
    removeFromCart
}: CartProps) => {
    return <>
    <header className="flex px-6 mt-4 justify-between flex-wrap">
        <h1 className="text-orange-900 text-2xl">
            <a href="/">
                MineShop
            </a>
        </h1>
        <CartSidebar 
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}/> 
    </header>
    </>
};
