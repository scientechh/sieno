import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useNavigate} from "react-router";

export const More = ({link}) => {
    const navigate = useNavigate()

    return(
        <div className={"more"} onClick={() => navigate(link)}>
            <MoreHorizIcon/>
            <p>Ավելին</p>
        </div>
    )
}