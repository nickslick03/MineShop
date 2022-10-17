import { Link } from "react-router-dom";
import { CartProps } from "../hooks/useCart";
import { Header } from "../ui/Header";

export const Home = ({
    cart,
    addToCart,
    removeFromCart
}: CartProps) => {
    return <>
        <Header 
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}/>
        <main className="mt-40 mb-24 p-4 box-border flex gap-32 flex-col items-center justify-center">
            <div className="text-5xl text-center">
                All your Minecraft needs in one website
            </div>
            <div className="text-xl text-center">
                We are the first website to accept emeralds as currency. Our prices will match or best any villager. Buy from us or you're a cube
            </div>
            <div>
                <Link to="./products" className="text-lg hover:text-xl transition-all">
                    Browse Products -{'>'}
                </Link>
            </div>
        </main>
    </>;
};
