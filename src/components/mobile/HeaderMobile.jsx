import { useState } from "react";

export default function HeaderMobile() {
    const [menu, setMenu] = useState(false);

    return (
        <div className="relative z-0">
            <div className="w-full bg-cover bg-center z-0">
                <img className="w-full" src="./src/assets/images/mobile/image-hero.jpg" alt="Image Header" />
            </div>
            <header className="absolute top-5 flex justify-around items-center gap-10 w-full py-10">
                <div className={`absolute top-0 w-full h-[100vh] bg-Black z-[60] translate-x-[100%] transition-all delay-[.25s] ${menu ? `delay-[.25s] translate-x-[-0%]` : ``} `}>
                    <div className="flex justify-between items-center w-full py-4 px-4">
                        <img className="w-[40%]" src="./src/assets/icons/logo.svg" alt="Icon Logo" />
                        <img onClick={() => setMenu(!menu)} src="./src/assets/icons/icon-close.svg" alt="Icon Close" />
                    </div>
                    <div className="flex justify-start items-start mt-[25%] ml-[5%]">
                        <nav>
                            <ul className="flex flex-col justify-start items-start gap-2">
                                <li><a className="text-White text-lg uppercase font-JosefinSans" href="#">About</a></li>
                                <li><a className="text-White text-lg uppercase font-JosefinSans" href="#">Carrers</a></li>
                                <li><a className="text-White text-lg uppercase font-JosefinSans" href="#">Events</a></li>
                                <li><a className="text-White text-lg uppercase font-JosefinSans" href="#">Products</a></li>
                                <li><a className="text-White text-lg uppercase font-JosefinSans" href="#">Support</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <img className="w-[40%]" src="./src/assets/icons/logo.svg" alt="Icon Logo" />
                <img onClick={() => setMenu(!menu)} className="cursor-pointer" src={menu ? `./src/assets/icons/icon-close.svg` : `./src/assets/icons/icon-hamburger.svg`} alt="Icon Menu" />
            </header>
            <div className="absolute top-[35%] left-0 right-0 w-[85%] border-2 py-4 pl-2 ml-[5%]">
                <h2 className="text-White text-3xl text-start uppercase font-JosefinSans pl-4">Immersive <br /> experiences <br /> that <br /> deliver</h2>
            </div>
        </div>
    );
}