import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId='769201285785-aqalr2rqfj5pas4jp32jq4dgcqb4jdvq.apps.googleusercontent.com'>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);
