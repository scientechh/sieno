import {Images} from "../assets/images/images";
import {Link} from "react-router-dom";


export const Footer = () => {

    return(
        <div className="footer">
            <div className={"container"}>
                <img src={Images.logo} alt="logo"/>
                <div className="footer__lists">
                    <ul>
                        <li><Link to={"/"}>Գլխավոր</Link></li>
                        <li><Link to={"/blogs/1"}>Բլոգ</Link></li>
                        <li><Link to={"/events/1"}>Իրադարձություններ</Link></li>
                        <li><Link to={"/contacts"}>Կապ</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={"/about"}>Մեր Մասին</Link></li>
                        <li><Link to={"/portfolio"}>Պորտֆոլիո</Link></li>
                        <li><Link to={"/products"}>Պրոդուկտներ</Link></li>
                    </ul>
                </div>
            </div>
            <hr/>
                <span>Sieno Academy - {new Date().getFullYear()}</span>
        </div>
    )
}