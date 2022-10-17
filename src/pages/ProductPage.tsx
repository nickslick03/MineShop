import { useState } from "react";
import { CartProps } from "../hooks/useCart";
import { CartAndQuantity } from "../ui/CartAndQuantity";
import { Header } from "../ui/Header";
import { PriceDisplay } from "../ui/PriceDisplay";
import { productProps } from "../ui/ProductPreview";

type productPageProps = productProps & CartProps;

export const ProductPage = ({ 
    product, 
    cart, 
    addToCart, 
    removeFromCart }: productPageProps) => {

    const { name, image, description, price, maxQuantity } = product;

    const [ img, setImg ] = useState('');

    const loadImage = async (imageName: string) => {
        const module = await import(`../assets/imgs/${imageName}.png`);
        setImg(module.default);
    };

    if (image) loadImage(image);

    return <>
        <Header
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart} 
        />
        <div className="m-24 flex gap-10 flex-wrap">
            <div className="flex flex-col">
                <img src={img} alt={image} className="bg-white p-2 rounded-md w-48"/>
                <div className="mt-8">
                    <PriceDisplay price={price} />
                </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
                <h1 className="text-3xl mb-5">
                    {name}
                </h1>
                <p>{description}</p>
                <CartAndQuantity
                product={product}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                maxQuantity={maxQuantity} />
            </div>
        </div>
        <a href="/products" className="ml-24 text-base hover:text-lg transition-all">
            {'<'}- Back to Products
        </a>
    </>;
}