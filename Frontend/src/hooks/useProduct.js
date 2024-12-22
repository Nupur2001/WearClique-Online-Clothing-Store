import { useState, useEffect } from "react";
import axios from "axios";

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/product/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useProduct;
