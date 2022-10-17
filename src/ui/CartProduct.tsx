import { CartItem, CartProps } from "../hooks/useCart";
import { PriceDisplay } from "./PriceDisplay";

export const CartProduct = ({
    cartItem: {
        product: {
            name,
            price,
        }
    }
}: {
    cartItem: CartItem
}) => {
    return <div className="px-2 py-1 text-center bg-white rounded flex justify-between">
        {name}
        <PriceDisplay price={price}/>
    </div>;
}