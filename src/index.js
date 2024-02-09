import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {ListProducts, listProducts} from './components/contextListProducts/contextListProduct';
import { ProviderListProducts } from './components/contextListProducts/providerContextListProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderListProducts>
      <App />
    </ProviderListProducts>
  </React.StrictMode>
);


reportWebVitals();
