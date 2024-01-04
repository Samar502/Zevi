import './App.css';
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
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const apiUrl = 'https://fakestoreapi.com/products';

    axios.get(apiUrl)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleCategory = (event) => {
    let val = event.target.value;
    setSelectedCategory(val);
  };

  const addToWishlist = (p_id) => {
    setWishlist((prevWishlist) => [...prevWishlist, p_id]);
  };

  const removeFromWishlist = (p_id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id!==p_id));
  }

  const handlePriceRange = (event) => {
    setSelectedPriceRange(event.target.value);
  }

  const handleRating = (event) => {
    setSelectedRating(event.target.value);
  }

  const filteredItems = products.filter((product) => {
    return (product.category.toLowerCase().indexOf(search.toLowerCase())!==-1 || product.title.toLowerCase().indexOf(search.toLowerCase())!==-1)
  });

  function filteredData(products, search) {
    let filteredProducts = products;
    if(search){
      filteredProducts = filteredItems;
    }

    if(selectedCategory || selectedPriceRange || selectedRating){
      filteredProducts = filteredProducts.filter((fproduct) =>{
        const category_match =(selectedCategory == " " || fproduct.category == selectedCategory)
        let pr = parseInt(fproduct.price)>100 ? 2:1;
        const price_range_match = (selectedPriceRange == 0 || pr == selectedPriceRange)
        let stars = Math.round(fproduct.rating.rate);
        const rating_match = (selectedRating == 0 || stars == selectedRating)
        return category_match && price_range_match && rating_match;
      });
    }
    
    return filteredProducts.map(({image, title, price, rating, id}) => (
      <Card className="card"
        img = {image}
        title = {title}
        price = {price}
        rating = {rating}
        onClick = {() => wishlist.includes(id)? removeFromWishlist(id) : addToWishlist(id)}
        wishlist = {wishlist}
        id = {id}
      />
    ))
  }

  const result = filteredData(products, search);

  return (
    <>
      <div className='main'>
       <section className='outer-sidebar'>
       <SideBar handleCategory={handleCategory} handlePriceRange={handlePriceRange} handleRating={handleRating}/>
       </section>
       <div className='outer-main'>
        <Searchbar handleSearch={handleSearch} search={search}/>
        <Products result={result}/>
        </div>
        </div>
    </>
  );
};

export default App;
