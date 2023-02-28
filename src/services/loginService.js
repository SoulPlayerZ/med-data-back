const loginModel = require('../models/loginModel');

const findUser = async (login) => {
  user = await loginModel.findUser(login);
  
  return user;
};

module.exports = {
  findUser,
}