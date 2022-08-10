import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import {routes} from "../../utils/routes";
import {RoutesName} from "../../types/routes";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {routes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>)}
            <Route
                path="*"
                element={<Navigate replace to={RoutesName.MAIN_ROUTE}/>}
            />
        </Routes>
    );
};

export default AppRouter;