import {  useState } from "react";
import { Header } from "../ui/Header";
import products from "../assets/JSON/products.json";
import { ProductPreview } from "../ui/ProductPreview";

export const Products = () => {

    const [ search, setSearch ] = useState('');

    return <>
        <Header />
        <div className="text-center">
            <input 
            type="search" 
            id="products-search" 
            placeholder="Search Products..." 
            className="rounded-lg p-1" 
            onKeyUp={event => setSearch((event.target as HTMLTextAreaElement).value)}/>
        </div>
        <h1 className="text-center text-5xl m-10">
            Products
        </h1>
        <div className="mx-4 mb-5 flex flex-wrap gap-4 justify-center">
            {
                products.map((product, index) => 
                    <a href={`products/${product.image}`} key={index}>
                        <ProductPreview product={product} />
                    </a>)
            }
        </div>
    </>;
};