import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Redux/store'
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={Store}> 
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
