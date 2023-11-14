const ProductsService = require("../services/product.service");


const productService = new ProductsService()

const getProduct = (_, { id }) => {
  return productService.findOne(id);
}

const getProducts = () => {
  return productService.find({});
}

const addProduct = (_, { dto }) => {
  return productService.create(dto);
}

const updateProduct = (_, { id, dto }) => {
  return productService.update(id, dto);
}

const deleteProduct = async (_, { id }) => {
  await productService.delete(id)
  return id;
}

const getProductsByCategory = async (parent) => {
  const id = parent.dataValues.id;
  return productService.getProductsByCategory(id);
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory }
