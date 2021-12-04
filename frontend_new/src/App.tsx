import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductsList from './components/ProductsList/ProductCard/ProducstsList';
import AddProductFrom from './components/Forms/AddProductForm';
import './App.css';

const App: React.FC = () => {
  const products = fetch('http://localhost:8080/products')
  .then(res => {
    if(!res.ok){
      throw new Error(`Http error: ${res.status}`)
    }
    return res
  })
  .then(products => console.log(products.json(), 'testing______)))000'))


  return (
    <div className="App">
      <NavBar />
      <AddProductFrom/>
    </div>
  );
}

export default App;
