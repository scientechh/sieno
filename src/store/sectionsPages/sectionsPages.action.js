import {
    BLOGS_LIST_CONTROLLER,
    EVENTS_LIST_CONTROLLER,
    PORTFOLIO_LIST_CONTROLLER,
    PRODUCTS_LIST_CONTROLLER
} from "./sectionsPages.types";


export const productsListController = (list) => {
    return {
        type: PRODUCTS_LIST_CONTROLLER,
        payload: list
    }
}

export const portfolioListController = (list) => {
    return {
        type: PORTFOLIO_LIST_CONTROLLER,
        payload: list
    }
}

export const blogsListController = (list) => {
    return {
        type: BLOGS_LIST_CONTROLLER,
        payload: list
    }
}

export const eventsListController = (list) => {
    return {
        type: EVENTS_LIST_CONTROLLER,
        payload: list
    }
}