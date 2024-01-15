import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"
import Home from './Home';
import Secondcompo from './Secondcompo';
import Thirdcompo from './Thirdcompo';
import Forthcompo from './Forthcompo';
import Fifthcompo from './Fifthcompo';
import Sixthcompo from './Sixthcompo';
import Seventhcompo from './Seventhcompo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App/>
    <Home/>
    <Secondcompo/>
    <Thirdcompo/>
    <Forthcompo/>
    <Fifthcompo/>
    <Sixthcompo/>
    <Seventhcompo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
