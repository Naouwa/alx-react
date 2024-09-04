import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import reportWebVitals from "./reportWebVitals";
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(document.getElementById("root-notifications"));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

reportWebVitals();
