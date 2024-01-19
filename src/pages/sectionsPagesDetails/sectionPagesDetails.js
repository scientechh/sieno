import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkIcon from '@mui/icons-material/Link';
import {useContext, useEffect, useRef, useState} from "react";
import {Slide} from "@mui/material";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {Loader} from "../../components/loader";
import {AllContext} from "../../utils/contaxt";
import {Form} from "../../components/form";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from "axios";

export const SectionPagesDetails = ({title, icon}) => {
    const [open, setOpen] = useState(false);
    const blogsList = useSelector(store => store.sectionPagesReducer.blogsData)
    const eventsList = useSelector(store => store.sectionPagesReducer.eventsData)
    const [list] = useState([...blogsList, ...eventsList])
    const params = useParams()
    const [content, setContent] = useState({});
    const {contentConverter} = useContext(AllContext)
    const ref = useRef()

    useEffect(() => {
        setContent(list?.find(el => el.title === params.name))
        if (localStorage.getItem("liked")){
            const arr = JSON.parse(localStorage.getItem("liked"))
            if (arr.find(el => el === params.name)){
                ref.current && ref.current.classList.add("active")
            }
        }
    }, [list])


    const copy = () => {
        setOpen(!open)
        setTimeout(() => {
            setOpen(false)
        }, 2000)
        return navigator.clipboard.writeText(window.location.href)
    }

    const like = () => {
        const element = ref.current
        if (element.className.split(' ')[1]){
            return
        }
        const spanElem = element.querySelector("span")
        const spanNum = +spanElem.innerText
        const spanPlus = spanNum + 1
        element.classList.add("active")
        spanElem.innerHTML = spanPlus
        blogsList?.map(el => (el.title === params.name ? el.likes = spanPlus : null))

        axios.put("https://scientech-8af5f-default-rtdb.firebaseio.com/blogs.json",
            blogsList).then(res => {
            console.log(res)
        })
        if (localStorage.getItem("liked")){
            const arr = JSON.parse(localStorage.getItem("liked"))
            localStorage.setItem("liked", JSON.stringify([...arr, content.title]))
        }else{
            localStorage.setItem("liked", JSON.stringify([content.title]))
        }
    }

    return(
        content ?
            <div className={"sectionPagesDetails container"}>
                <h2>{icon} {title} <KeyboardArrowRightIcon/> {content.title}
                    <LinkIcon
                        className={"copy"}
                        onClick={copy}
                    />
                </h2>
                <section className="sectionPagesDetails__content">
                    <div className={"imgInfo"}>
                        <img src={content.img} alt={content.title} />
                        <div className={"info"}>
                            <p><CalendarMonthIcon/> {content.date}</p>
                            {
                                content.likes &&
                                <p
                                    className={"like"}
                                    onClick={like}
                                    ref={ref}
                                ><FavoriteIcon/> <span>{content.likes}</span></p>
                            }

                        </div>
                    </div>
                    <div className={"sectionPagesDetails__content__text"}>
                        {contentConverter(content.content)}

                        {
                            content.haveForm && <Form title={params.name} type={content.type}/>
                        }
                    </div>

                </section>
                <Slide direction="up" in={open} >
                    <p className={"alertCopy"}>Պատճենված է</p>
                </Slide>
            </div>
            :
            <Loader/>
    )
}