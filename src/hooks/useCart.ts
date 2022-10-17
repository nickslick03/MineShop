import { productProps } from "../ui/ProductPreview"
import { useLocalStorage } from "./useLocalStorage";

export type CartItem =  {
    product: productProps["product"],
    quantity: number,
}

export type CartProps = {
    cart: CartItem[],
    addToCart: (cartItem: CartItem) => void;
    removeFromCart: (cartItem: CartItem) => void;
}

const findCartIndex = (cartItem1: CartItem, cart: CartItem[]) => 
    cart.findIndex(cartItem2 => cartItem1.product.name === cartItem2.product.name);

export const isInCart = (cartItem: CartItem, cart: CartItem[]) =>
    findCartIndex(cartItem, cart) > -1 ? true : false;

export const useCart = () => {
    //TODO: persist to local storage
    
    const {value: cart, setValue: setCart} = useLocalStorage<CartItem[]>('cart', []);

    const addToCart = (cartItem: CartItem) => {
        
        const index = findCartIndex(cartItem, cart);
        
        if (index === -1)
            setCart(cart.concat(cartItem)); // adds new item to cart
        else
            setCart([...cart.slice(0, index), cartItem, ...cart.slice(index + 1)]); // changes quantity of pre-existing item
    };

    const removeFromCart = (cartItem: CartItem) => {

        const index = findCartIndex(cartItem, cart);

        setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
    }
    
    return {
        cart, 
        addToCart,
        removeFromCart,
    };
};