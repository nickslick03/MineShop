import { useState } from "react";
import { AddToCart, CartItem, useCart } from "../hooks/useCart";
import { Header } from "../ui/Header";
import { PriceDisplay } from "../ui/PriceDisplay";
import { productProps } from "../ui/ProductPreview";

type productPageProps = productProps & {
    cart: CartItem[],
    addToCart: AddToCart
}

export const ProductPage = ({product, cart, addToCart }: productPageProps) => {

    const { name, image, description, price, maxQuantity } = product;

    const [ img, setImg ] = useState('');

    const [ quantity, setQuantity ] = useState(1);
    
    const quantityCheck = (quantity: number) => {
        if (quantity > 0 && quantity <= maxQuantity) setQuantity(quantity);
    }

    const loadImage = async (imageName: string) => {
        const module = await import(`../assets/imgs/${imageName}.png`);
        setImg(module.default);
    };

    if (image) loadImage(image);

    console.log(cart);

    return <>
        <Header />
        <div className="m-24 flex gap-10">
            <div className="flex flex-col">
                <img src={img} alt={image} className="bg-white p-2 rounded-md"/>
                <div className="mt-8">
                    <PriceDisplay price={price} />
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="text-3xl mb-5">
                    {name}
                </h1>
                <p>{description}</p>
                <button 
                className="block w-fit bg-green-700 text-white p-2 rounded-lg scale-1 hover:scale-110 transition-all"
                onClick={(() => addToCart({
                    product,
                    quantity,
                }))}>
                
                    Add to Cart
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
            </div>
        </div>
        <a href="/products" className="ml-24 text-base hover:text-lg transition-all">
            {'<'}- Back to Products
        </a>
    </>;
}