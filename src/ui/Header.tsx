import { CartSidebar } from "./CartSidebar";

export const Header = () => {
    return <>
    <header className="flex px-6 mt-4 justify-between flex-wrap">
        <h1 className="text-orange-900 text-2xl">
            <a href="./">
                MineShop
            </a>
        </h1>
        <CartSidebar /> 
    </header>
    </>
};
