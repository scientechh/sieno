import {Images} from "../../assets/images/images";
import {Cricle} from "../../components/cricle";
import {DubbleCricle} from "../../components/dubbleCricle";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export const Header = () => {

    return(
        <div className={"header"}>
            <div className={`rectangle`}>
                <img src={Images.logoW} className={'logo'} alt="logo"/>
                <img src={Images.logoW} className={'logo_back'} alt="logo"/>
                <Cricle color={'#A900E4'}/>
                <DubbleCricle/>
            </div>
            <h1 className="container">Լավագույն ընտրություն` Sieno Academy <KeyboardDoubleArrowDownIcon/></h1>
        </div>
    )
}