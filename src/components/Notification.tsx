import { pages } from "next/dist/build/templates/app-page";
import React from "react";

const Notifications = () => {
    return(
        <div className="h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm
             md:text-base cursor-pointer">
            Free delivery for all orders over 500Rs. 
            Order your food now!
        </div>
    )
}

export default Notifications