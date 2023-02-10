import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App1 from './App copy';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {App1() }
  {new App().render()}
  </React.StrictMode>
);


