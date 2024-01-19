import {Images} from "../../assets/images/images";


export const About = () => {

    return(
        <div className={"about container"}>
            <img src={Images.logo} alt="do it"/>
            <p>DOIT Center-ը առցանց աշխատող ՏՏ ընկերություն է որը զբաղվում է դասընթացների կազմակերպմամաբ և ատեստավորմամբ։
                Այն հիմնադրվել է 2023 թվականին։
            </p>
        </div>
    )
}