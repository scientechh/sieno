import {Images} from "../assets/images/images";
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import NotesIcon from '@mui/icons-material/Notes';
import {Drawer} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export const Menu = () => {
    const [dropdown, setDropdown] = useState(false)
    const [state, setState] = useState({right: false});

    const activeCheck = ({ isActive, isPending }) => (
        isPending ? "pending" : isActive ? "active" : ""
    )

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return(
        <div className={"menu"}>
            <div className={"container"}>
                <Link to={"/"}>
                    <img src={Images.logo} alt="logo"/>
                </Link>
                <div className={"menu__list"}>
                    <NavLink to={"/"} className={activeCheck}>Գլխավոր</NavLink>
                    <NavLink to={`/blogs/1`} className={activeCheck}>Բլոգներ</NavLink>
                    <NavLink to={`/events/1`} className={activeCheck}>Իրադարձություններ</NavLink>
                    <div className={"menu__list__dropdown"}>
                        <NavLink to={"/about"} onMouseEnter={() => setDropdown(!dropdown)}>Մեր Մասին</NavLink>
                        {
                            dropdown &&
                                <div className={"menu__list__dropdown__list"} onMouseLeave={() => setDropdown(!dropdown)}>
                                    <NavLink to={"/about"} className={activeCheck}>Մեր Մասին</NavLink>
                                    <NavLink to={"/products"} className={activeCheck}>Պրոդուկտներ</NavLink>
                                    <NavLink to={"/portfolio"} className={activeCheck}>Պորտֆոլիո</NavLink>
                                </div>
                        }
                    </div>
                    <NavLink to={"/contact"} className={activeCheck}>Կապ</NavLink>
                </div>
                <NotesIcon className={"openBtn"} onClick={toggleDrawer("right", true)} func={toggleDrawer}/>
                <Drawer
                    anchor={"right"}
                    open={state.right}
                    onClose={toggleDrawer("right", false)}
                >
                    <div className={"mobMenu"}>
                        <CloseIcon className={"closeBtn"} onClick={toggleDrawer("right", false)}/>
                        <NavLink to={"/"} className={activeCheck}>Գլխավոր</NavLink>
                        <NavLink to={"/blogs/1"} className={activeCheck}>Բլոգներ</NavLink>
                        <NavLink to={"/events/1"} className={activeCheck}>Իրադարձություններ</NavLink>
                        <NavLink to={"/about"} className={activeCheck}>Մեր Մասին</NavLink>
                        <NavLink to={"/products"} className={activeCheck}>Պրոդուկտներ</NavLink>
                        <NavLink to={"/portfolio"} className={activeCheck}>Պորտֆոլիո</NavLink>
                        <NavLink to={"/contact"} className={activeCheck}>Կապ</NavLink>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}