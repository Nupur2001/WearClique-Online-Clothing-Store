import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductData from "../data/products.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFit, setSelectedFit] = useState("");

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        console.log("Product Data:", ProductData);
        let fetchedProduct = ProductData.products.find((p) => p.id === parseInt(productId));

        if (!fetchedProduct) {
          const res = await axios.get("http://localhost:4001/product");
          const allProducts = res.data.flatMap((item) => item.products || []);
          fetchedProduct = allProducts.find((p) => p.id === parseInt(productId));
        }

        console.log("Fetched Product:", fetchedProduct);
        setProduct(fetchedProduct || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      }
    };

    fetchProductDetails();
  }, [productId]);

  
  const [error, setError] = useState("");



  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || !selectedFit) {
      setError("All fields are required.");
      return;
    }

    const cartItem = {
      id: product.id,
      title: product.product_title,
      price: product.product_price,
      color: selectedColor,
      size: selectedSize,
      fit: selectedFit,
    };
    addToCart(cartItem); 
    toast.success(`${product.product_title} added to cart!`);
  };



  if (!product) {
    return (
      <div className="text-center mt-10">
        <p>Loading product details...</p>
      </div>
    );
  }

  const {
    product_title,
    product_images,
    product_long_description,
    product_price,
    product_available_colors,
    product_available_sizes,
    product_available_fits,
  } = product;

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const handleProceedToCheckout = () => {
    alert(`Proceeding to checkout with:
      Color: ${selectedColor}, 
      Size: ${selectedSize}, 
      Fit: ${selectedFit}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <Slider {...sliderSettings} className="w-full">
              {product_images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${product_title} ${index + 1}`}
                    className="w-full h-96 object-cover rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Product details */}
          <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
            <h1 className="text-3xl font-semibold text-gray-800 colorChange">{product_title}</h1>
            <p className="text-lg text-gray-600 mt-4">{product_long_description}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-6">Price: ₹{product_price}</p>

            {/* Color dropdown */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold">Color:</label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md bg-gray-50"
              >
                <option value="">Select a color</option>
                {product_available_colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            </div>

            {/* Size dropdown */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold">Size:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md bg-gray-50"
              >
                <option value="">Select a size</option>
                {product_available_sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            </div>

            {/* Fit dropdown */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold">Fit:</label>
              <select
                value={selectedFit}
                onChange={(e) => setSelectedFit(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md bg-gray-50"
              >
                <option value="">Select a fit</option>
                {product_available_fits.map((fit, index) => (
                  <option key={index} value={fit}>
                    {fit}
                  </option>
                ))}
              </select>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            </div>

            {/* Add to Cart button */}
            <div className="mt-6">
              <button onClick={handleAddToCart} className="btn btnColor text-white">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;

