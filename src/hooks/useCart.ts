import { useState } from "react"
import { productProps } from "../ui/ProductPreview"

export type CartItem =  {
    product: productProps["product"],
    quantity: number,
}

export type AddToCart = (newCartItem: CartItem) => void;

export const useCart = () => {

    //TODO: persist to local storage

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (newCartItem: CartItem) => {
        
        const index = cart.findIndex(cartItem => cartItem.product.name === newCartItem.product.name);
        
        if (index === -1)
            setCart(cart.concat(newCartItem)); // adds new item to cart
        else if (newCartItem.quantity > 0)
            setCart([...cart.slice(0, index), newCartItem, ...cart.slice(index + 1)]); // changes quantity of pre-existing item
        else
            setCart([...cart.slice(0, index), ...cart.slice(index + 1)]); // removes item from cart
    }
    
    return [cart, addToCart];
};