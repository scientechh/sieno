import SearchIcon from "@mui/icons-material/Search";


export const Search = () => {

    return(
        <div className={"search"}>
            <input type="text"/>
            <button className={"search__btn flexCenter"}><SearchIcon/></button>
        </div>
    )
}