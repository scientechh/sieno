import {Images} from "../../assets/images/images";


export const About = () => {

    return(
        <div className={"about container"}>
            <img src={Images.logo} alt="do it"/>
            <p>Sieno Academy-ը առցանց աշխատող ընկերություն է որը զբաղվում է դասընթացների կազմակերպմամաբ և ատեստավորմամբ։
                Այն հիմնադրվել է 2024 թվականին։
            </p>
        </div>
    )
}