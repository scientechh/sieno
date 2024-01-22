import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';


export const Section = ({title, cardItems}) => {

    return(
        <div className={"section"}>
            <div className={"section__title"}>
                <p>{title}</p>
                <span className={"decorative-line"}/>
            </div>
            <div className={"section__main"}>
                {cardItems}
            </div>
        </div>
    )
}