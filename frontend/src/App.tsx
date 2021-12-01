import React from 'react';
import './App.css';
import Header from './components/Header';

export interface PlushibleProps {
  quantity: number
}

function App() {
  const quantity = 0
  return (
    <div className="App">
      <Header quantity={quantity}/>
    </div>
  );
}

export default App;
