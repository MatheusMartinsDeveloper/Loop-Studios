import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from "./components/desktop/App.jsx";
import AppMobile from "./components/mobile/AppMobile.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { window.innerWidth > 375 ? <App /> : <AppMobile /> }
  </React.StrictMode>,
)
