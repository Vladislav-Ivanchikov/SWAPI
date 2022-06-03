import React from "react";

export enum RoutesName {
    MAIN_ROUTE = "/",
    SEARCH_ROUTE = '/search',
    ABOUT_ROUTE = '/about',
    DESCRIPTION_SEARCH_ROUTE = '/search/:charName'
}

export interface IRoutes {
    path: string,
    element: React.ReactElement
}