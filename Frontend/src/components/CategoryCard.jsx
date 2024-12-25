import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all w-72 lg:w-80 xl:w-96">
      {category.image_link ? (
        <img
          src={category.image_link}
          alt={category.name || "Category"}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-md mb-4">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      
      <h2
        className="text-2xl font-semibold colorChange"
        title={category.name}
      >
        {category.name}
      </h2>

      <p className="text-gray-600 mt-2 line-clamp-3">
        {category.description || "Description not available."}
      </p>
      
      <div className="flex justify-center mt-4">
        <Link
          to={`/products/${category.name}`}
          aria-label={`Explore ${category.name}`}
          className="inline-block px-6 py-2 btnColor text-white font-semibold rounded-md transition-all hover:scale-105 hover:bg-opacity-90"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
