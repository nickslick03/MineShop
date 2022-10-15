import emerald from "../assets/imgs/Emerald.png"

export const PriceDisplay = ({ price }: { price: number }) => 
    <div className="flex content-center justify-center">
        <img src={emerald} alt="Emeralds" className="inline h-5 m-0 mr-1" /> 
        <span className="p-0 m-0">X {price}</span>
    </div>