import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import PeopleContext from "./context/peopleContext";
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function Main() {
    const [people, setPeople] = useState([])

    return (
        <React.StrictMode>
            <PeopleContext.Provider value={{people, setPeople}}>
                <App/>
            </PeopleContext.Provider>
        </React.StrictMode>
    )
}

root.render(
    <Main/>
);

