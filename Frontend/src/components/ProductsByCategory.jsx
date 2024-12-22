import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productData from "../data/products.json"; 
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductsByCategory = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const products = productData.products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(products);
  }, [category]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize colorChange">
          {category?.charAt(0).toUpperCase() + category?.slice(1)} Products
        </h1>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-700 mt-4">
            No products found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredProducts.map((product) => (
              <div
                className="bg-white shadow-md rounded-lg overflow-hidden"
                key={product.id}
              >
                <img
                  src={product?.product_images?.[0] || "path/to/default-image.jpg"}
                  alt={product?.product_title || "Default Title"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product?.product_title || "Product Title"}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {product?.product_short_description || "No description available"}
                  </p>
                  <p className="font-semibold text-gray-800 mt-4">
                    Price: ₹{product?.product_price || "N/A"}
                  </p>
                  <div className="py-2 px-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="btn bg-white text-white duration-300 cursor-pointer btnColor"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductsByCategory;
