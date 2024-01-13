
export default function Header() {
    return (
        <div className="relative">
            <div className="w-full bg-cover bg-center">
                <img className="w-full" src="./src/assets/images/desktop/image-hero.jpg" alt="Image Header" />
            </div>
            <header className="absolute top-0 left-0 right-0 flex justify-between items-center py-14 px-16">
                <img className="w-[15%] ml-[9%]" src="./src/assets/icons/logo.svg" alt="Image Logo" />
                <nav>
                    <ul className="flex justify-center items-center gap-10">
                        <li className="relative"><a className="text-White text-2xl font-Alata line-animation" href="#">About</a></li>
                        <li className="relative"><a className="text-White text-2xl font-Alata line-animation" href="#">Careers</a></li>
                        <li className="relative"><a className="text-White text-2xl font-Alata line-animation" href="#">Events</a></li>
                        <li className="relative"><a className="text-White text-2xl font-Alata line-animation" href="#">Products</a></li>
                        <li className="relative"><a className="text-White text-2xl font-Alata line-animation" href="#">Support</a></li>
                    </ul>
                </nav>
            </header>
            <div className="absolute top-[35%] left-[12%] w-[45%] border-4 border-White">
                <h1 className="text-White text-7xl uppercase font-JosefinSans py-12 pl-12">Immersive <br /> experiences <br /> that deliver</h1>
            </div>
        </div>
    );
}