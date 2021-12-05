import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { SearchBarProvider } from './context/SearchBarContext';
import { CartContextProvider } from './context/CartItemsContext';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY!);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <SearchBarProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
      </SearchBarProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);


