import {Images} from "../assets/images/images";
import {Link} from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import {Cricle} from "./cricle";


export const Footer = () => {
    const footerYear = new Date().getFullYear()

    return(
        <div className={'footer'}>
            <Cricle color={'rgb(242, 94, 255)'}/>
            <div className="container">
                <div className="footer__bottom">
                    <div className="footer__bottom__logos">
                        <img src={Images.logoW} alt=""/>
                    </div>
                    <div className={'footer__bottom__links'}>
                        <Link to={''}>Գլխավոր</Link>
                        <Link to={''}>Բլոգներ</Link>
                        <Link to={''}>Իրադարձություններ</Link>
                        <Link to={''}>Պրոդուկտներ</Link>
                    </div>
                </div>

                <b>Sieno Academy - {footerYear}</b>
            </div>
        </div>
    )
}