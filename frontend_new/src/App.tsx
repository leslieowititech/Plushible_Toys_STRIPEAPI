import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductsList from './components/ProductsList/ProductCard/ProducstsList';
import AddProductFrom from './components/Forms/AddProductForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <AddProductFrom/>
    </div>
  );
}

export default App;
