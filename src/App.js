import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Searchbar from './SearchBar/Searchbar';
import Products from './Products/Products';
import Card from './Components/Card';

const App = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://fakestoreapi.com/products';

    // Make a GET request using Axios
    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);  // Assuming the response contains JSON data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(products);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredItems = products.filter((product) => product.category.toLowerCase().indexOf(search.toLowerCase())!==-1);

  function filteredData(products, search) {
    let filteredProducts = products;

    if(search){
      filteredProducts = filteredItems;
    }
    
    return filteredProducts.map(({image, title, price}) => (
      <Card className="card"
        img = {image}
        title = {title}
        price = {price}
      />
    ))
  }

  const result = filteredData(products, search);

  return (
    <div className="App">
      <Searchbar handleSearch={handleSearch} search={search}/>
      <Products result={result}/>
    </div>
  );
};

export default App;
