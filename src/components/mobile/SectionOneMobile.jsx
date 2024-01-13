
export default function SectionOneMobile() {
    return(
        <section className="flex flex-col justify-center items-center gap-8 w-full">
            <img className="bg-center w-[90%]" src="./src/assets/images/mobile/image-interactive.jpg" alt="Image Interactive" />
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-Black text-3xl uppercase font-JosefinSans">The leader in <br /> interactive VR</h2>
                <p className="text-DarkGray text-sm text-center font-Alata">Founded in 2011, Loopstudios has been <br />
                producing world-class virtual reality <br />
                projects for some of the best companies <br />
                around the globe. Our award-winning <br />
                creations have transformed businesses <br />
                through digital experiences that bind to <br />
                their brand.</p>
            </div>
        </section>
    );
}