import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51K1EcQBN69YBp2gzBltlGaRyM0uSu4br3TKYAlXmzcd8QrlPPeHXnfIT08a91hEvdx2vkDGSfqfBJHpyQ3TLJvjU00q0l0XY8p");

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);


