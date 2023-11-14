const CategoryService = require("../services/category.service");
const checkRolesGql = require("../utils/checkRolesGql");
const checkJwtGql = require("../utils/checkJwtGql");

const service = new CategoryService();
//read about graphql shield package
const addCategory = async (_, { dto }, context) => {
  const  user  = await checkJwtGql(context);
  checkRolesGql(user, 'admin');
  return service.create({
    ...dto,
    image: dto.image.href
  });
}

const getCategory = async (_, { id }) => {
  return service.findOne(id);
}

module.exports = { addCategory, getCategory }