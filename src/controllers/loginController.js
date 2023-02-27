const loginModel = require('../models/loginModel');

const checkInputs = (login) => {
  const verifyExist = !login
  const verifyTypes = typeof login !== 'string'
  
  return verifyExist && verifyTypes
}

const findUser = async (req, res) => {
  const { name } = req.body;
  if(checkInputs(name)){
    return res.status(400).json({ status: 400, message: 'Usuário inválidos ou inexistente.' })
  }
  user = await loginModel.findUser(name);

  if (user.length === 0) {
    return res.status(400).json({ status: 400, message: 'Usuário inválidos ou inexistente.' })
  }
  return res.status(200).json({ status: 200, message: 'Success!', user });
};

module.exports = {
  findUser,
}