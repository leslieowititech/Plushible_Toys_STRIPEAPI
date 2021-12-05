import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductsList from './components/ProductsList/ProductCard/ProducstsList';
import AddProductFrom from './components/Forms/AddProductForm';
import './App.css';

const App: React.FC = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('http://localhost:8080/products', {
      headers: {'Content-Type': 'application/json'}
    })

    if(response.ok){
      const data = await response.json()
      console.log(data.data)
      setProducts(data.data)
    }
  }

  useEffect(() => {
    getProducts()
  },[])


  return (
    <div className="App">
      <NavBar />
      {/* <AddProductFrom/> */}
      <ProductsList products={products}/>
    </div>
  );
}

export default App;
