import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Searchbar from './SearchBar/Searchbar';
import Products from './Products/Products';
import Card from './Components/Card/Card';
import SideBar from './SideBar/SideBar';

const App = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://fakestoreapi.com/products';

    // Make a GET request using Axios
    axios.get(apiUrl)
      .then(response => {
        // let arr = response.data;
        // arr.forEach((element,idx) => {
        //   // console.log(arr[idx]);
        //   final_arr.push(element)
        // });
        // console.log(final_arr);
        setProducts(response.data);  // Assuming the response contains JSON data
        // console.log(Object.values(response.data));
        // console.log(typeof(response.data))
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // console.log(products);
  let ratings = []
  products.forEach(product => {
    // console.log(product);
    ratings.push(product.value);
  })
  // console.log(products);
  // console.log(ratings);
  // console.log(ratings);
  // console.log(products[0]);
  // products.forEach(element => {
  //   console.log(element);
  // })
  // let val = products[0].rating;
  // products.forEach(element => {
  //   console.log(element);
  // })
  // console.log(products[0].rating)
  // console.log(products[0].rating.rate);
  // console.log("ok");
  // console.log(JSON.stringify(products.rating));
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = products.filter((product) => product.category.toLowerCase().indexOf(search.toLowerCase())!==-1);

  function filteredData(products, search) {
    let filteredProducts = products;
    // console.log(filteredItems.ratings);
    if(search){
      filteredProducts = filteredItems;
    }

    console.log(filteredProducts);
    console.log(selectedCategory);
    if(selectedCategory){
      filteredProducts = filteredProducts.filter(({category}) => 
        // console.log(category);
        category == selectedCategory
      );
    }
    console.log("ok");
    console.log(filteredProducts);
    
    return filteredProducts.map(({image, title, price, rating}) => (
      <Card className="card"
        img = {image}
        title = {title}
        price = {price}
        rating = {rating}
      />
    ))
  }

  const result = filteredData(products, search);

  return (
    <>
      <Searchbar handleSearch={handleSearch} search={search}/>
      <SideBar handleCategory={handleCategory}/>
      <Products result={result}/>
    </>
  );
};

export default App;
