import {useState} from "react";
import ReactPaginate from "react-paginate";
import {useNavigate, useParams} from "react-router";
import React from "react";
import {Card} from "../../components/card";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const PaginatedItems = React.memo(({ itemsPerPage, items, listName }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const params = useParams()
    const navigate = useNavigate()

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const Items = ({currentItems}) => {
        return (
            <div className={"__main"}>
                {
                    items?.map(el => (
                        <Card
                            id={el?.id}
                            key={el?.id}
                            title={el?.title}
                            poster={el?.img}
                            about={el.about ? el.about.slice(0, 30) + "..." : el.content[0].content.slice(0, 30) + "..."}
                            link={`/${listName}/${el?._id}`}
                        />
                    )).reverse()
                }
            </div>
        );
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        navigate(`/events/${event.selected + 1}`)
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={<KeyboardArrowRightIcon/>}
                onPageChange={() => handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<KeyboardArrowLeftIcon/>}
                renderOnZeroPageCount={null}
                initialPage={+params.page}
            />
        </>
    );
})
