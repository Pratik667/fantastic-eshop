const Product = require('../models/product');

async function getProductById(productId) {
  try {
    const product = await Product.findOne({ id: productId });
    return product ? product : null;
  } catch (error) {
    throw new Error('Error finding product: ' + error.message);
  }
}

async function getAllProducts(){
  try{
    const product = await Product.find();
    return product ? product : null;
  }catch (error) {
    throw new Error('Error finding product: ' + error.message);
  }
}

async function createProduct(productData) {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (error) {
    throw new Error('Error creating product: ' + error.message);
  }
}

module.exports = {
  getProductById,
  getAllProducts,
  createProduct
};
