import React, {useState} from "react";
import AliceCarousel from "react-alice-carousel";
import CloseIcon from "@mui/icons-material/Close";
import {Drawer} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Card} from "../../components/card";


export const Works = ({title, icon, list}) => {
    const [openDetails, setOpenDetails] = useState(false);
    const [activeItem, setActiveItem] = useState({})
    const items = []

    const responsive = {
        0: { items: 1 },
        980: { items: 3 },
    };

    list?.map((el) => (
        items.push(<Card
            id={el.id}
            key={el.id}
            title={el.title}
            buttonFunc={true}
            openFunc={setOpenDetails}
            setActive={setActiveItem}
            poster={el.poster}
            about={el.about?.slice(0, 30) + "...."}
            list={list}
        />)
    ))

    return(
        <div className={"works container"}>
            <h2>{icon} {title}</h2>
            <AliceCarousel mouseTracking items={items.slice(0, items.length / 2).reverse()} responsive={responsive}/>
            <Drawer
                anchor={"right"}
                open={openDetails}
                onClose={() => setOpenDetails(false)}
            >
                <div className={"works__details"}>
                    <CloseIcon className={"closeBtn"} onClick={() => setOpenDetails(false)}/>

                    <img className={"logo"} src={activeItem?.logo} alt="logo"/>
                    <img className={"poster"} src={activeItem?.poster} alt=""/>
                    <h2>{activeItem?.title}</h2>
                    <p>{activeItem?.about}</p>

                    <a href={activeItem?.url} rel={"noopener"}>Տեսնել <VisibilityIcon className={"icon"}/></a>
                </div>
            </Drawer>
        </div>
    )
}