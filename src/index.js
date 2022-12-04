import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import { UserProvider } from "./contexts/user.context";
import { MerchProvider } from "./contexts/merch.context";
import { DropdownProvider} from "./contexts/cart-dropdown-handler.context";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <UserProvider>
         <MerchProvider>
             <DropdownProvider>
                    <App />
             </DropdownProvider>
         </MerchProvider>
       </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);