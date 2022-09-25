import { useState } from "react";
import { Header } from "../ui/Header";

export const Products = () => {

    const [ search, setSearch ] = useState('');

    console.log(search);

    return <>
        <Header />
        <div className="text-center mb-10">
            <input 
            type="search" 
            id="products-search" 
            placeholder="Search Products..." 
            className="rounded-lg p-1" 
            onKeyUp={event => setSearch((event.target as HTMLTextAreaElement).value)}/>
        </div>
        <h1 className="text-center text-5xl">
            Products
        </h1>
    </>;
};