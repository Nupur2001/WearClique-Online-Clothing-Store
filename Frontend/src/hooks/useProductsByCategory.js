// src/hooks/useProductsByCategory.js

import { useState, useEffect } from "react";
import axios from "axios";

const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/products/${category}`);
        setProducts(res.data); // Update products state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log(error);
        setError("Error fetching products"); // Set error state if request fails
        setLoading(false);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]); // Dependency array ensures this runs only when the category changes

  return { products, loading, error };
};

export default useProductsByCategory;
