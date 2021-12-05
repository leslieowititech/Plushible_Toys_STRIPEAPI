import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductsList from './components/ProductsList/ProductCard/ProducstsList';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddProductFrom from './components/Forms/AddProductForm';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import './App.css';

const App: React.FC = () => {

  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  
  
  const getProducts = async () => {
    const response = await fetch('http://localhost:8080/products', {
      headers: {'Content-Type': 'application/json'}
    })

    if(response.ok){
      const data = await response.json()
      setPrices(data[1].data)
      setProducts(data[0].data)
    }
  }

  useEffect(() => {
    getProducts()
  },[])


  return (
    <div className="App">
      <NavBar />
      {/* <AddProductFrom/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductsList products={products} prices={prices} />} />
          <Route  path='/new' element={<AddProductFrom/>}/>
          <Route path='/cart' element={<CheckoutPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
