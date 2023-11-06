import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './components/Navigator';
import Content from './components/Content';
import Paperbase from './components/Paperbase';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigator/>
    <Paperbase/>
  </React.StrictMode>
);


