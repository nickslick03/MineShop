import { useState } from "react";

type productProps = {
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
        console.log(module);
        setImg(module.default);
    }

    loadImage(image as string);

    return (
        <div className=" bg-slate-200 p-4 rounded-lg">
            <img src={img} alt={image} className="bg-white p-2 rounded-md"/>
            <h2 className=" text-xl font-bold">
                {name}
            </h2>
            <div>
                {price} x Emeralds
            </div>
            <div>
                {catagory}
            </div>
        </div>
    );
}