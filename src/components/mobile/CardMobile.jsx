
export default function CardMobile({ image, title }) {
    return(
        <div className="relative left-0 right-0 w-[90%]">
            <img className="w-full" src={ image } alt={`Image for ${ title }`} />
            <h3 className="absolute bottom-0 left-4 text-White text-2xl uppercase font-JosefinSans">{ title }</h3>
        </div>
    );
}