import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Footer from './components/Footer';

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

  const handleSearch = search => {
    setSearch(search)
    setPage("search")
  }

  console.log(products)

  return (
    <>
    {page === "home" 
      ? <Home 
        handleSearch={handleSearch}
        />
      : <><Search 
        handleSearch={handleSearch}
        products={products}/>
        <Footer />
        </>}
      
    </>
  );
}

export default App;
