import {Search} from "../../components/search";

export const Header = ({title, icon}) => {

    return(
        <div className={"sectionPages__header"}>
            <h2>{icon} {title}</h2>
            <Search/>
        </div>
    )
}