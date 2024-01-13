
export default function SectionOne() {
    return (
        <section className="w-full mt-[10%] overflow-hidden">
            <div className="relative ml-[15%] w-full">
                <img className="relative" src="./src/assets/images/desktop/image-interactive.jpg" alt="Image Interactive" />
                <div className="absolute bottom-[-10%] right-[20%] bg-White p-12">
                    <h2 className="text-5xl text-Black uppercase font-JosefinSans">The leader in <br /> interactive VR</h2>
                    <p className="text-lg text-DarkGray font-Alata">Founded in 2011, Loopstudios has been producing world-class <br />
                     virtual reality projects for some of the <br />
                     best companies around the globe. Our award-winning creations have transformed <br />
                     businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </div>
        </section>
    );
}