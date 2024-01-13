
export default function Footer() {
    return(
        <footer className="w-full bg-Black mt-[10%] py-16">
            <div className="flex justify-around items-center">
                <div className="flex flex-col justify-start items-start gap-10">
                    <img src="./src/assets/icons/logo.svg" alt="Image logo" />
                    <nav>
                        <ul className="flex justify-center items-center gap-10">
                            <li className="relative"><a className="text-White text-xl font-Alata line-animation" href="#">About</a></li>
                            <li className="relative"><a className="text-White text-xl font-Alata line-animation" href="#">Carrers</a></li>
                            <li className="relative"><a className="text-White text-xl font-Alata line-animation" href="#">Events</a></li>
                            <li className="relative"><a className="text-White text-xl font-Alata line-animation" href="#">Products</a></li>
                            <li className="relative"><a className="text-White text-xl font-Alata line-animation" href="#">Support</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col justify-center items-end gap-10">
                    <div className="flex justify-end items-center gap-6">
                        <img className="cursor-pointer" src="./src/assets/icons/icon-facebook.svg" alt="Icon Social Media" />
                        <img className="cursor-pointer" src="./src/assets/icons/icon-twitter.svg" alt="Icon Social Media" />
                        <img className="cursor-pointer" src="./src/assets/icons/icon-pinterest.svg" alt="Icon Social Media" />
                        <img className="cursor-pointer" src="./src/assets/icons/icon-instagram.svg" alt="Icon Social Media" />
                    </div>
                    <span className="text-xl text-DarkGray">© 2024 Loopstudios. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}