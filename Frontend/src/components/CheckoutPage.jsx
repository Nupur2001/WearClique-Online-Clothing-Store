import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      clearCart(); 
      navigate("/"); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate, clearCart]); 

  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-semibold">Your order is confirmed!</h2>
      <p className="mt-4">Redirecting you to the home page...</p>
    </div>
  );
};

export default CheckoutPage;
