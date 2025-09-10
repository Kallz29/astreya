import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './style.css';
import App from './App';

const Main = () => {
    const location = useLocation();

    return (
        <div className="page-transition" key={location.pathname}>
            <App />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Main />
        </Router>
    </React.StrictMode>
);