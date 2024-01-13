import CardMobile from "./CardMobile.jsx";

export default function SectionTwoMobile() {
    return(
        <section className="mt-[20%] flex flex-col gap-9 w-[100%]">
            <div className="flex justify-center items-center">
                <h2 className="text-Black text-3xl uppercase text-center font-JosefinSans">Our Creations</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-9 w-[100%]">
                <CardMobile image={`./src/assets/images/mobile/image-deep-earth.jpg`}
                title={<>Deep <br /> Earth</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-night-arcade.jpg`}
                title={<>Night <br /> Arcade</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-soccer-team.jpg`}
                title={<>Soccer <br /> Team vr</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-grid.jpg`}
                title={<>The <br /> Grid</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-from-above.jpg`}
                title={<>From up <br /> Above vr</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-pocket-borealis.jpg`}
                title={<>Pocket <br /> Borealis</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-curiosity.jpg`}
                title={<>The <br /> Curiosity</>}/>
                <CardMobile image={`./src/assets/images/mobile/image-fisheye.jpg`}
                title={<>Make it <br /> Fisheye</>}/>
            </div>
            <div className="flex justify-center items-center w-full">
                <a className="text-Black text-base text-center uppercase font-Alata tracking-[5px] border-2 border-VeryDarkGray py-2 w-[50%]" href="#">See All</a>
            </div>
        </section>
    );
}