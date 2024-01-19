import {Link} from "react-router-dom";
import React from "react";


export const Card = ({buttonFunc, openFunc, setActive, poster, title, about, link, id, list}) => {

    const clickItems = () => {
        openFunc(true)
        setActive(list.find(el => (el.id === id)))
    }

    return(
        <div className="card">
            <img src={poster} alt="img"/>
            <div className="card__text">
                <h3>{title}</h3>
                <p>{about}</p>
                {
                    buttonFunc ?
                        <button style={{border: "none", cursor: "pointer"}} onClick={clickItems}>Դիտել</button>
                        :
                        <Link to={link}>Դիտել</Link>
                }
            </div>
        </div>
    )
}