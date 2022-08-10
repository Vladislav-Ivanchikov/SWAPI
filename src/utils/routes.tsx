import { IRoutes, RoutesName } from "../types/routes";
import MainPage from "../pages/main/MainPage";
import SearchPage from "../pages/search/SearchPage";
import AboutPage from "../pages/about/AboutPage";
import DescriptionPage from "../pages/descr/DescriptionPage";

export const routes: IRoutes[] = [
  {
    path: RoutesName.MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: RoutesName.SEARCH_ROUTE,
    element: <SearchPage />,
  },
  {
    path: RoutesName.ABOUT_ROUTE,
    element: <AboutPage />,
  },
  {
    path: RoutesName.DESCRIPTION_SEARCH_ROUTE,
    element: <DescriptionPage />,
  },
];
