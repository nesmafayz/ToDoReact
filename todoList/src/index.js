import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Quote from './Components/Quote/Quote.jsx';
import ToDo from './Components/ToDo/ToDo.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToDo/>
    
    <Quote/>
  </React.StrictMode>
);

reportWebVitals();

