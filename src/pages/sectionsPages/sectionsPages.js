import {Header} from "./header";
import {PaginatedItems} from "./paginatedItem";
import {useSelector} from "react-redux";


export const SectionsPages = ({title, icon, listName}) => {
    const blogsList = useSelector(store => store.sectionPagesReducer.blogsData)
    const eventsList = useSelector(store => store.sectionPagesReducer.eventsData)
    const list = listName === "blog" ? blogsList : eventsList


    return(
        <div className={"sectionPages"}>
            <div className="container">
                <Header title={title} icon={icon}/>
                <PaginatedItems itemsPerPage={8} items={list} listName={listName}/>
            </div>
        </div>
    )
}