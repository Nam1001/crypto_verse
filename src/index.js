import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Redux/store'
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
   <Provider store={Store}> 
    <App />
    </Provider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
