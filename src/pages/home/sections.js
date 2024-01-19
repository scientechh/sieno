import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';


export const Section = ({title, cardItems}) => {

    const responsive = {
        0: { items: 1 },
        651: { items: 2 },
        980: { items: 3 },
    };

    return(
        <div className={"section"}>
            <div className={"section__title"}>
                <p>{title}</p>
                <span className={"decorative-line"}/>
            </div>
            <div className={"section__main"}>
                <AliceCarousel mouseTracking items={cardItems.reverse()} responsive={responsive}/>
            </div>
        </div>
    )
}