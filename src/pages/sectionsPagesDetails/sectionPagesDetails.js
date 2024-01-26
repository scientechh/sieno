import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkIcon from '@mui/icons-material/Link';
import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Slide} from "@mui/material";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../../components/loader";
import {AllContext} from "../../utils/contaxt";
import {Form} from "../../components/form";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from "axios";
import {blogsListController, eventsListController} from "../../store/sectionsPages/sectionsPages.action";
import {Helmet} from "react-helmet";
import {useCookies} from "react-cookie";

export const SectionPagesDetails = ({title, icon}) => {
    const [open, setOpen] = useState(false);
    const blogsList = useSelector(store => store.sectionPagesReducer.blogsData)
    const eventsList = useSelector(store => store.sectionPagesReducer.eventsData)
    const [list, setList] = useState([...blogsList, ...eventsList])
    const [content, setContent] = useState({});
    const {contentConverter} = useContext(AllContext)
    const [liked, setLiked] = useState(false)
    const params = useParams()
    const ref = useRef()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['likedSieno']);


    useEffect(() => {
        window.scrollTo(0, 0)

        axios.get(process.env.REACT_APP_NODE_URL + "/users/getAllBlogsEvents/?type=blog"
        ).then(res => {
            if (res.data?.find(el => el._id === params.name)) {
                setContent(res.data?.find(el => el._id === params.name))
            }
            dispatch(blogsListController([...res.data]))
        })

        axios.get(process.env.REACT_APP_NODE_URL + "/users/getAllBlogsEvents/?type=event"
        ).then(res => {
            if (res.data?.find(el => el._id === params.name)) {
                setContent(res.data?.find(el => el._id === params.name))
            }
            dispatch(eventsListController([...res.data]))
        })

        if (cookies.likedSieno) {
            const arr = cookies.likedSieno
            if (arr.find(el => el === params.name)) {
                setLiked(true)
            }
        }
    }, [])

    const copy = () => {
        setOpen(!open)
        setTimeout(() => {
            setOpen(false)
        }, 2000)
        return navigator.clipboard.writeText(window.location.href)
    }

    const like = () => {
        const element = ref.current
        if (liked) {
            return
        }

        const spanElem = element.querySelector("span")
        const spanNum = +spanElem.innerText
        const spanPlus = spanNum + 1
        element.classList.add("active")
        spanElem.innerHTML = spanPlus
        blogsList?.map(el => (el._id === params.name ? el.likes = spanPlus : null))

        axios.put(process.env.REACT_APP_NODE_URL + "/users/updateBlogsEvents", {
            _id: params.name,
            likes: spanPlus
        }).then(r => {
            console.log(r)
        })

        if (cookies.likedSieno) {
            const arr = cookies.likedSieno
            setCookie("likedSieno", JSON.stringify([...arr, content._id]))
        } else {
            setCookie("likedSieno", JSON.stringify([content._id]))
        }
    }

    return (
        content?.title ?
            <>
                <Helmet>
                    <meta property="og:title" content={content.title} />
                    <meta property="og:image" content={content.img}/>
                    <title>{content.title} / Sieno Academy</title>
                </Helmet>
                <div className={"sectionPagesDetails container"}>
                    <h2>{icon} {title} <KeyboardArrowRightIcon/> {content.title}
                        <LinkIcon
                            className={"copy"}
                            onClick={copy}
                        />
                    </h2>
                    <section className="sectionPagesDetails__content">
                        <div className={"imgInfo"}>
                            <img src={content.img} alt={content.title}/>
                            <div className={"info"}>
                                <p><CalendarMonthIcon/> {content.date}</p>
                                <p
                                    className={`like ${liked ? 'active' : null}`}
                                    onClick={like}
                                    ref={ref}
                                ><FavoriteIcon/> <span>{content.likes}</span></p>

                            </div>
                        </div>
                        <div className={"sectionPagesDetails__content__text"}>
                            {contentConverter(content.content, [])}

                            {
                                content.haveForm && <Form title={content.title} type={content.type}/>
                            }
                        </div>

                    </section>
                    <Slide direction="up" in={open}>
                        <p className={"alertCopy"}>Պատճենված է</p>
                    </Slide>
                </div>
            </>
            :
            <Loader/>
    )
}