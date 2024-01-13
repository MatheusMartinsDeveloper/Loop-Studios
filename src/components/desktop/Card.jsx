import { useState } from "react";

export default function Card({ image, title }) {
    const [hover, setHover] = useState(false);

    return(
        <div onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)} className="relative w-[100%] cursor-pointer">
            <img className={`w-full ${hover ? `filter grayscale brightness-150` : `grayscale-[0%]`} `} src={ image } alt={`Image for ${ title }`} />
            <h3 className={`absolute bottom-0 left-6 pb-[10%] text-4xl uppercase font-JosefinSans ${hover ? `text-Black` : `text-White`} `}>{ title }</h3>
        </div>
    );
}