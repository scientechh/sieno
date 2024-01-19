import {Header} from "./header";
import {Section} from "./sections";
import {Card} from "../../components/card";
import {Loader} from "../../components/loader";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {More} from "../../components/more";


export const Home = () => {
    const handleDragStart = (e) => e.preventDefault();
    const [loader, setLoader] = useState(false)
    const blogsList = useSelector(store => store.sectionPagesReducer.blogsData)
    const eventsList = useSelector(store => store.sectionPagesReducer.eventsData)

    useEffect(() => {
        setLoader(true)
    }, [])

    const cardConvert = (list, type) => {
        const arr = [];
        list?.map((el) => (
            arr.push(<Card
                id={el.id}
                key={el.id}
                title={el.title}
                link={`doitcenter/${type === "b" ? "blog" : "event"}/${el.title}`}
                poster={el.img}
                about={type === "b" ? el.about.slice(0, 50) + "..." : null}
                onDragStart={handleDragStart} role="presentation"
            />
        )))
        return arr
    }

    return(
        loader ?
            <div>
                <div className={"container"}>
                    <Header/>
                    <Section
                        title={"Իրադարձություններ"}
                        cardItems={[...cardConvert(eventsList, "e").slice(0, 5),
                            (eventsList.length > 5) && <More link={"doitcenter/events/1"}/>]}
                    />
                    <Section title={"Բլոգ"} cardItems={[...cardConvert(blogsList, "b").slice(0, 5),
                        (blogsList.length > 5) && <More link={"doitcenter/blogs/1"}/>]}/>
                </div>
            </div>
            :
        <Loader/>

    )
}