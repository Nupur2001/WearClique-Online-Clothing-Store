import Product from "../models/product.model.js";
export const getProduct=async(req , res)=>{

  try {
    const products=await Product.find()
    return res.status(200).json(products)
  } catch (error) {
    console.log("Error fecting products", error)
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
 
}