import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptyCartImage from "../assets/EmptyCart.jpg"; 
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const GST_RATE = 0.15;

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0); 
    const gst = subtotal * GST_RATE; 
    const total = subtotal + gst; 
    return { subtotal, gst, total };
  };
  

  const { subtotal, gst, total } = calculateTotal();

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 text-center">
        {cartItems.length === 0 ? (
          <div className="text-center mt-20">
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="mx-auto w-1/3"
            />
            <h2 className="text-xl font-semibold mt-4">Your cart is empty!</h2>
            <p className="text-gray-600 mt-2">
              Looks like you haven't added anything to your cart yet.
            </p>
            <a
              href="/categories"
              className="btn btnColor text-white"
            >
              Shop Now
            </a>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
            <div className="flex flex-col space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 flex justify-between bg-gray-50"
                >
                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <p className="text-sm text-gray-600">Fit: {item.fit}</p>
                  </div>
                  <p className="font-semibold text-lg">₹{item.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-lg">Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p className="text-lg">GST (15%): ₹{gst.toFixed(2)}</p>
              <h2 className="text-2xl font-bold">Total: ₹{total.toFixed(2)}</h2>
            </div>
            <button className="mt-4 btn btnColor text-white px-4 py-2 rounded-md"
            onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;

