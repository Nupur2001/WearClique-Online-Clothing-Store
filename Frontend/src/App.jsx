import React from "react";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import ProductsByCategory from "./components/ProductsByCategory";
import ProductDetails from "./components/ProductDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth(); // Correctly destructure the context value

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={authUser ? <Categories /> : <Navigate to="/signup" replace />} />
        {/* <Route
          path="/categories"
          element={authUser ? <Categories /> : <Navigate to="/signup" />}
        /> */}
        <Route path="/products/:category" element={<ProductsByCategory />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
