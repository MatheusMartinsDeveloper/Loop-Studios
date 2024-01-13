import Card from "./Card.jsx";

export default function SectionTwo() {
    return (
        <section className="w-full mt-[20%] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[70%]">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-6xl text-Black uppercase font-JosefinSans">Our creations</h2>
                    <a className="text-xl text-Black uppercase font-Alata tracking-[2px] border-[4px] border-DarkGray rounded-sm py-2 px-14 cursor-pointer hover:bg-Black hover:text-White hover:delay-200 hover:transition-all hover:border-Black delay-150" href="#">See All</a>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">
                    <div className="grid grid-cols-4 justify-center items-center w-full gap-10">
                        <Card image={`./src/assets/images/desktop/image-deep-earth.jpg`}
                            title={<>Deep <br /> earth</>} />
                        <Card image={`./src/assets/images/desktop/image-night-arcade.jpg`}
                            title={<>Night <br /> arcade</>} />
                        <Card image={`./src/assets/images/desktop/image-soccer-team.jpg`}
                            title={<>Soccer <br /> team vr</>} />
                        <Card image={`./src/assets/images/desktop/image-grid.jpg`}
                            title={<>The <br /> grid</>} />
                    </div>
                    <div className="grid grid-cols-4 justify-center items-center w-full gap-10">
                        <Card image={`./src/assets/images/desktop/image-from-above.jpg`}
                            title={<>From up <br /> above vr</>} />
                        <Card image={`./src/assets/images/desktop/image-pocket-borealis.jpg`}
                            title={<>Pocket <br /> borealis</>} />
                        <Card image={`./src/assets/images/desktop/image-curiosity.jpg`}
                            title={<>The <br /> curiosity</>} />
                        <Card image={`./src/assets/images/desktop/image-fisheye.jpg`}
                            title={<>Make it <br /> fisheye</>} />
                    </div>
                </div>
            </div>
        </section>
    );
}