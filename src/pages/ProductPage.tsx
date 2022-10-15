import { useState } from "react";
import { Header } from "../ui/Header";
import { PriceDisplay } from "../ui/PriceDisplay";
import { productProps } from "../ui/ProductPreview";

export const ProductPage = ({ product: {
    name,
    description,
    image,
    price,
    catagory,
    maxQuantity
} }: productProps) => {

    const [ img, setImg ] = useState('');
    
    const loadImage = async (imageName: string) => {
        const module = await import(`../assets/imgs/${imageName}.png`);
        setImg(module.default);
    }

    if (image) loadImage(image);

    return <>
        <Header />
        <div className="m-24 flex gap-10">
            <div className="flex flex-col">
                <img src={img} alt={image} className="bg-white p-2 rounded-md"/>
                <div className="scale-150 mt-10">
                    <PriceDisplay price={price} />
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="text-3xl mb-5">Diamond Sword</h1>
                <p>{description}</p>
                <button className="block w-fit bg-green-700 text-white p-2 rounded-lg scale-1 hover:scale-110 transition-all">
                    Add to Cart
                </button>
                <div>
                    <label htmlFor="quantity">
                        Quantity: 
                    </label>
                    <input className="w-10 pl-2 ml-2 rounded-sm" type="number" name="quantity" id="" />
                </div>
                
                
            </div>
        </div>
        <a href="/products" className="ml-24 text-base hover:text-lg transition-all">
            {'<'}- Back to Products
        </a>
    </>;
}