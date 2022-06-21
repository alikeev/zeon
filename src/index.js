import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import CartContextProvider from './cardContext';
import { Context } from './Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <Context>
          <App />
        </Context>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
