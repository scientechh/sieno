import {
    BLOGS_LIST_CONTROLLER,
    EVENTS_LIST_CONTROLLER,
    PORTFOLIO_LIST_CONTROLLER,
    PRODUCTS_LIST_CONTROLLER
} from "./sectionsPages.types";

const initialStore = {
    eventsData: [],
    blogsData: [],
    products: [],
    portfolio: []
}

export const sectionPagesReducer = (store = initialStore, action) => {
    switch (action.type){
        case PORTFOLIO_LIST_CONTROLLER:
            return {
                eventsData: [...store.eventsData],
                blogsData: [...store.blogsData],
                products: [...store.products],
                portfolio: [...store.portfolio, action.payload]
            }

        case PRODUCTS_LIST_CONTROLLER:
            return {
                eventsData: [...store.eventsData],
                blogsData: [...store.blogsData],
                products: [...store.products, action.payload],
                portfolio: [...store.portfolio]
            }

        case BLOGS_LIST_CONTROLLER:
            return {
                eventsData: [...store.eventsData],
                blogsData: [...action.payload],
                products: [...store.products],
                portfolio: [...store.portfolio]
            }

        case EVENTS_LIST_CONTROLLER:
            return {
                eventsData: [...action.payload],
                blogsData: [...store.blogsData],
                products: [...store.products],
                portfolio: [...store.portfolio]
            }

        default:
            return store
    }
}