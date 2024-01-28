import {Route, Routes} from "react-router";
import {Home} from "./pages/home/home";
import {Menu} from "./components/menu";
import {SectionsPages} from "./pages/sectionsPages/sectionsPages";
import {Footer} from "./components/footer";
import EventIcon from "@mui/icons-material/Event";
import {useEffect, useState} from "react";
import FeedIcon from '@mui/icons-material/Feed';
import {SectionPagesDetails} from "./pages/sectionsPagesDetails/sectionPagesDetails";
import {Works} from "./pages/works/works";
import CopyrightIcon from '@mui/icons-material/Copyright';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import {Contact} from "./pages/contact/contact";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {
    blogsListController, eventsListController,
    portfolioListController,
    productsListController
} from "./store/sectionsPages/sectionsPages.action";
import {About} from "./pages/about/about";
import {Helmet} from "react-helmet";
import {Images} from "./assets/images/images";
import logoBanner from "./assets/images/logo/scienoAcademy_banner.png";
import {Loader} from "./components/loader";


function App() {
    const dispatch = useDispatch()
    const productsList = useSelector(store => store.sectionPagesReducer.products)
    const portfolioList = useSelector(store => store.sectionPagesReducer.portfolio)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.defaults.withCredentials = true

        axios.get(process.env.REACT_APP_NODE_URL + "/users/getAllAbout/?type=product"
        ).then(res => {
            dispatch(productsListController([...res.data]))
            setLoading('')
        })

        axios.get(process.env.REACT_APP_NODE_URL + "/users/getAllAbout/?type=portfolio"
        ).then(res => {
            dispatch(portfolioListController([...res.data]))
            setLoading('')
        })

        axios.get(process.env.REACT_APP_NODE_URL + "/users/getAllBlogsEvents/?type=blog"
        ).then(res => {
            dispatch(blogsListController([...res.data]))
            setLoading('')
        })

        axios.get(process.env.REACT_APP_NODE_URL + "/users/getAllBlogsEvents/?type=event"
        ).then(res => {
            dispatch(eventsListController([...res.data]))
            setLoading(true)
        })
    }, [])

  return (
      loading ?
        <>
          <Helmet>
              <meta property="og:title" content="Sieno Academy Լավագույն Ընտրությունը" />
              <meta property="og:image" content={window.location.origin}"/"{Images.logoBanner} />
              <meta property="og:url" content={window.location.href}/>
              <title>Sieno Academy</title>
          </Helmet>
          <Menu/>
          <Routes>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/products"} element={<Works title={"Պրոդուկտներ"} icon={<CopyrightIcon/>} list={productsList}/>} />
              <Route path={"/portfolio"} element={<Works title={"Պորտֆոլիո"} icon={<HomeRepairServiceIcon/>} list={portfolioList}/>} />
              <Route path={"/about"} element={<About/>} />
              <Route path={"/events/:pages"} element={
                  <SectionsPages
                      title={"Իրադարձություններ"}
                      icon={<EventIcon className={"icon"}/>}
                      listName={"event"}
                  />
              } />

              <Route path={"/blogs/:pages"} element={
                  <SectionsPages
                      title={"Բլոգներ"}
                      icon={<FeedIcon className={"icon"}/>}
                      listName={"blog"}
                  />
              } />
              <Route path={"/blog/:name"} element={<SectionPagesDetails
                  title={"Բլոգներ"}
                  icon={<FeedIcon className={"icon"}/>}
              />} />
              <Route path={"/event/:name"} element={<SectionPagesDetails
                  title={"Իրադարձություններ"}
                  icon={<EventIcon className={"icon"}/>}
              />} />
              <Route path={"/contact"} element={<Contact/>} />
          </Routes>
          <Footer/>
      </>
          :
          <Loader/>
  );
}

export default App;
