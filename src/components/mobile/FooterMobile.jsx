
export default function FooterMobile() {
    return(
        <footer className="w-full bg-Black mt-[30%] py-8 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                <img className="w-[80%]" src="./src/assets/icons/logo.svg" alt="Icon Logo" />
            </div>
            <div className="mt-[10%]">
                <nav>
                    <ul className="flex flex-col justify-center items-center gap-4">
                        <li><a className="text-base text-White font-JosefinSans" href="#">About</a></li>
                        <li><a className="text-base text-White font-JosefinSans" href="#">Carrers</a></li>
                        <li><a className="text-base text-White font-JosefinSans" href="#">Events</a></li>
                        <li><a className="text-base text-White font-JosefinSans" href="#">Products</a></li>
                        <li><a className="text-base text-White font-JosefinSans" href="#">Support</a></li>
                    </ul>
                </nav>
            </div>
            <div className="mt-[10%] flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-4">
                    <img src="./src/assets/icons/icon-facebook.svg" alt="Icon Social Media" />
                    <img src="./src/assets/icons/icon-twitter.svg" alt="Icon Social Media" />
                    <img src="./src/assets/icons/icon-pinterest.svg" alt="Icon Social Media" />
                    <img src="./src/assets/icons/icon-instagram.svg" alt="Icon Social Media" />
                </div>
                <span className="text-base text-DarkGray font-Alata">© 2024 Loopstudios. All rights reserved.</span>
            </div>
        </footer>
    );
}