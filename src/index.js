import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import App from './App';

import {UserProvider} from "./contexts/user.context";
import {MerchProvider} from "./contexts/merch.context";
import {DropdownProvider} from "./contexts/cart-dropdown-handler.context";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <MerchProvider>
                    <DropdownProvider>
                        <App/>
                    </DropdownProvider>
                </MerchProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
