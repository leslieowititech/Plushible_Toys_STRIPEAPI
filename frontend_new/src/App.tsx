import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductsList from './components/ProductsList/ProductCard/ProducstsList';
import AddProductFrom from './components/Forms/AddProductForm';
import './App.css';

const App: React.FC = () => {

  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('')

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
      <NavBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}/>
      {/* <AddProductFrom/> */}
      <ProductsList products={products} prices={prices} searchPhrase={searchPhrase}/>
    </div>
  );
}

export default App;
