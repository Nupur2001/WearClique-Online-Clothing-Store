import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to Category model
      required: true,
    },
    product_title: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_short_description: {
      type: String,
      required: true,
    },
    product_long_description: {
      type: String,
    },
    product_images: [
      {
        type: String, // Array of image URLs
      },
    ],
    product_available_colors: [
      {
        type: String, // Array of colors available for the product
      },
    ],
    product_available_sizes: [
      {
        type: String, // Array of sizes available for the product
      },
    ],
    product_available_fits: [
      {
        type: String, // Array of fits available for the product (e.g., Slim, Regular)
      },
    ],
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product; 
