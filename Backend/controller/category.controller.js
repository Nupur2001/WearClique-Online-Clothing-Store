import Category from "../models/category.model.js";

const getCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getCategories; 