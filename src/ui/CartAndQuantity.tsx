import { useEffect, useState } from "react";
import { CartItem, CartProps, isInCart } from "../hooks/useCart";
import { productProps } from "./ProductPreview";

export const CartAndQuantity = ({
    product,
    cart,
    addToCart,
    removeFromCart,
    maxQuantity,
}: {
    product: productProps['product'],
    cart: CartItem[],
    addToCart: CartProps['addToCart'],
    removeFromCart: CartProps['removeFromCart'],
    maxQuantity: number,
}) => {

    const productInCart = isInCart({product} as CartItem, cart);
    
    const [ quantity, setQuantity ] = useState(productInCart 
        ? cart.find(cartItem => cartItem.product.name === product.name)?.quantity as number
        : 1); 
    
    const quantityCheck = (quantity: number) => {
        if (quantity > 0 && quantity <= maxQuantity) setQuantity(quantity);
    }       

    const addOrRemove = () => (productInCart ? removeFromCart : addToCart)({product, quantity});

    useEffect(() => {
        if (productInCart) addToCart({product, quantity});
    }, [quantity]);

    useEffect(() => {
         if (productInCart) 
            setQuantity(cart.find(cartItem => cartItem.product.name === product.name)?.quantity as number)
    }, [cart]);

    return <>
        <button 
        className="block w-fit bg-green-700 text-white p-2 rounded-lg scale-1 hover:scale-110 transition-all"
        onClick={() => addOrRemove()}>
        {productInCart ? 'Remove from' : 'Add to'} Cart
        </button>
        <div>
            <label htmlFor="quantity">
                Quantity: 
            </label>
            <input 
            className="w-11 pl-2 ml-2 rounded-sm" 
            type="number" 
            name="quantity" 
            value={quantity}
            onChange={e => quantityCheck(Number(e.target.value))}/>
        </div>
    </>
}