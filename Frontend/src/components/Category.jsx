import React, { useState, useEffect } from "react";
import categoryData from "../data/category.json"; 
import CategoryCard from "../components/CategoryCard";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setCategories(categoryData);
      setLoading(false);
    } catch (err) {
      setError("Failed to load categories");
      setLoading(false);
    }
  }, []);

  return (
    <div className="container mx-auto mt-20 px-6 text-center">
      <h1 className="text-4xl font-semibold colorChange">Categories</h1>

      {loading ? (
        <div className="mt-12 flex justify-center">
          <div
            className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin"
            aria-label="Loading categories..."
          ></div>
        </div>
      ) : error ? (
        <div className="mt-12 text-red-500 text-lg">
          {`An error occurred: ${error}`}
        </div>
      ) : categories.length > 0 ? (
        <div
          className="mt-12 flex flex-wrap justify-center gap-8"
          aria-label="List of categories"
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div
          className="mt-12 text-red-500 text-lg font-semibold"
          aria-label="No categories found"
        >
          No categories found.
        </div>
      )}
    </div>
  );
};

export default Category;
