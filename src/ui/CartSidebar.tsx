import { useRef, useState } from "react";

export const CartSidebar = () => {
    
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
        className="fixed top-0 right-0 w-60 h-screen bg-gradient-to-r from-green-500 to-green-600"
        style={{visibility: isVisible ? 'visible' : 'hidden'}}>
            <h2 className="text-3xl text-center mt-8">
                Cart
            </h2>
            <div 
            className="text-2xl absolute top-1 right-2 select-none rounded-md p-1 hover:bg-opacity-50 hover:bg-black hover:text-white transition"
            onClick={switchVisibility}>
                X
            </div>
            <div>
                Items
            </div>
        </div>
    </>;
};
