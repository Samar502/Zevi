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
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  // const [favourite, setFavourite] = useState(false);
  const [wishlist, setWishlist] = useState([]);

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
        // products.forEach((product) => {
        //   product["pr"] = product.price > 100 ? 1 : 0;
        // })
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // console.log(products);
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

  // useEffect(() => {
  //   filteredData(products, search);
  // }, [selectedCategory, selectedPriceRange]);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleCategory = (event) => {
    let val = event.target.value;
    // console.log(`val is ${val}`);
    setSelectedCategory(val);
  };

  // const handleClick = (event) => {
  //   setFavourite(!favourite);
  // };

  const addToWishlist = (p_id) => {
    setWishlist((prevWishlist) => [...prevWishlist, p_id]);
  };

  const removeFromWishlist = (p_id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id!==p_id));
  }

  const handlePriceRange = (event) => {
    // console.log(`Price Range is ${event.target.value}`);
    setSelectedPriceRange(event.target.value);
  }

  const handleRating = (event) => {
    setSelectedRating(event.target.value);
  }

  const filteredItems = products.filter((product) => product.category.toLowerCase().indexOf(search.toLowerCase())!==-1);

  function filteredData(products, search) {
    let filteredProducts = products;
    // console.log(filteredItems.ratings);
    if(search){
      filteredProducts = filteredItems;
    }

    // console.log(filteredProducts);
    // console.log(selectedCategory);
    if(selectedCategory || selectedPriceRange || selectedRating){
      filteredProducts = filteredProducts.filter((fproduct) =>{
        // console.log(category);
        // console.log(fproduct.category);
        // console.log(fproduct.price);
        // console.log(selectedCategory); 
        // console.log(pr);
        const category_match =(selectedCategory == " " || fproduct.category == selectedCategory)
        let pr = parseInt(fproduct.price)>100 ? 2:1;
        const price_range_match = (selectedPriceRange == 0 || pr == selectedPriceRange)
        let stars = Math.round(fproduct.rating.rate);
        const rating_match = (selectedRating == 0 || stars == selectedRating)
        // console.log(`Category match is ${category_match}`);
        // console.log(`Price match is ${price_range_match}`);
        return category_match && price_range_match && rating_match;
      });
      // console.log(filteredProducts);
      // console.log(selectedPriceRange);
      // if(selectedPriceRange){
      //   filteredProducts = filteredProducts.filter((fproduct) => { 
      //     console.log(`pr is ${pr}`);
      //     console.log(`selected pr is ${selectedPriceRange}`);
      //     return pr == selectedPriceRange;
      //   })
      // }
    }
    // console.log("ok");
    // console.log(filteredProducts);
    
    return filteredProducts.map(({image, title, price, rating, id}) => (
      <Card className="card"
        img = {image}
        title = {title}
        price = {price}
        rating = {rating}
        onClick = {() => wishlist.includes(id)? removeFromWishlist(id) : addToWishlist(id)}
        // favourite = {favourite}
        wishlist = {wishlist}
        id = {id}
      />
    ))
  }

  const result = filteredData(products, search);

  return (
    <>
       <SideBar handleCategory={handleCategory} handlePriceRange={handlePriceRange} handleRating={handleRating}/>
        <Searchbar handleSearch={handleSearch} search={search}/>
        <Products result={result}/>
    </>
  );
};

export default App;
