import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from "./utils/stripe/stripe.utils";
import {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {store} from "./store/store";

import App from './App';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Elements stripe={stripePromise}>
                    <App/>
                </Elements>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
