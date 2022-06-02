import React from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {AppStyle} from "./App.style";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppStyle/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
