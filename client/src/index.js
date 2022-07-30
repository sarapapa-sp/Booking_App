import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import {SearchContext} from "./Context/SearchContext";
import {SearchContextProvider} from "./Context/SearchContext"
import {AuthContextProvider} from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <SearchContextProvider>
            <App />
        </SearchContextProvider>
    </AuthContextProvider>

);

