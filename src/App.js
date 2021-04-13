import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import CardsContainer from './components/CardsContainer';

const App = () => {

  const [ page, setPage ] = useState("home")
  const [ search, setSearch ] = useState('')
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q='
    
    fetch(baseUrl + search)
    .then (res => res.json())
    .then (data => setProducts(data.results))
  }, [search])

  console.log(products)
  console.log(search)

  const handleSearch = search => {
    setSearch(search)
  }

  return (
    <>
    <Home 
    handleSearch={handleSearch}
    />
    <Nav
    handleSearch={handleSearch} />
    <CardsContainer 
    products={products}/>
    
    </>
  );
}

export default App;
