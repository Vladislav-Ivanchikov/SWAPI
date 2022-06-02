import React from "react";

export enum RoutesName {
    MAIN_ROUTE = "/",
    SEARCH_ROUTE = '/search',
    ABOUT_ROUTE = '/about'
}

export interface IRoutes {
    path: string,
    element: React.ReactElement
}