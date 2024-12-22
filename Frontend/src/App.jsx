import React from 'react';
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Categories from './components/Categories/Categories';
import ProductsByCategory from './components/ProductsByCategory';
import ProductDetails from './components/ProductDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:category" element={<ProductsByCategory />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        {/* <Route path="/category/:category" element={<ProductsByCategory />} /> */}
        {/* <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/category/:category" element={<ProductsByCategory />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default App;