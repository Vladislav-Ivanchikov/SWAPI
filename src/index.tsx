import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import SearchContext from "./context/searchContext";
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function Main() {
    const [query, setQuery] = useState<string>('')

    return (
        <React.StrictMode>
            <SearchContext.Provider value={{query, setQuery}}>
                <App/>
            </SearchContext.Provider>
        </React.StrictMode>
    )
}

root.render(
    <Main/>
);

