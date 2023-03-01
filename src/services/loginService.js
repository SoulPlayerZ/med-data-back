const loginModel = require('../models/loginModel');

const generateToken = async (name) => {
  user = await loginModel.generateToken(name);
  
  return user;
};

const getUsers = async () => {
  user = await loginModel.getUsers();
  
  return user;
};

module.exports = {
  generateToken,
  getUsers,
}