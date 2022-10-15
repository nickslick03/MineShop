import { useState } from "react";
import { PriceDisplay } from "./PriceDisplay";

export type productProps = {
    product: {
        name: string,
        image?: string,
        description: string,
        price: number,
        maxQuantity: number,
        catagory: string,
    }
}

export const ProductPreview = ({ product: {
    name,
    image,
    price,
    catagory,
} }: productProps) => {
    
    const [ img, setImg ] = useState('');
    
    const loadImage = async (imageName: string) => {
        const module = await import(`../assets/imgs/${imageName}.png`);
        setImg(module.default);
    }

    if (image) loadImage(image);

    return (
        <div className=" bg-slate-200 p-4 rounded-lg hover:scale-105 transition-all">
            <img src={img} alt={image} className="bg-white p-2 rounded-md"/>
            <h2 className=" text-xl font-bold">
                {name}
            </h2>
            <PriceDisplay price={price} />
            <div>
                {catagory}
            </div>
        </div>
    );
}