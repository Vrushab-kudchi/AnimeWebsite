import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/global';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
       </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);



