const { getProduct, getProducts, addProduct, deleteProduct, updateProduct,getProductsByCategory } = require("./product.resolvers");

const { login } = require("./auth.resolvers");
const { addCategory, getCategory } = require("./category.resolvers");
const { RegularExpression } = require("graphql-scalars");

const CategoryNameType = new RegularExpression('CategoryNameType',/^[a-zA-Z0-9]{3,8}/);


const resolvers = {

  Query: {
    hello: () => 'Hello World!',
    getPeople: (_, args) => `Hi ${args.name} your age is ${args.age}`,
    getInt: () => 1,
    getString: () => 'Hello World!',
    getFloat: () => 1.5,
    getBoolean: () => true,
    getId: () => 11231312,
    getArray: (_, args) => [...args.numbers],
    product: getProduct,
    products: getProducts,
    category: getCategory

  },
  Mutation: {
    login,
    addProduct,
    deleteProduct,
    updateProduct,
    addCategory
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory

  }
}

module.exports = resolvers;
