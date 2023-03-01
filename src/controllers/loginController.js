const loginService = require('../services/loginService');
require('dotenv/config');
const jwt = require('jsonwebtoken');


const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const checkInputs = (login) => {
  const verifyExist = !login
  const verifyTypes = typeof login !== 'string'
  
  return verifyExist || verifyTypes
}

const findUser = async (req, res) => {
  try {
    const { name } = req.body;

    const jwtConfig = {
      algorithm: "HS256",
    }
  
  
    if(checkInputs(name)){
      return res.status(400).json({ status: 400, message: 'Usuário inválidos ou inexistente.' })
    }
    user = await loginService.findUser(name);
  
    if (user.length === 0) {
      return res.status(400).json({ status: 400, message: 'Usuário inválidos ou inexistente.' })
    }
    const token = jwt.sign({ data: { name: user.first_name, email: user.email} }, secret, jwtConfig);

    return res.status(200).json({ status: 200, message: 'Success!', token });
    
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }

};

module.exports = {
  findUser,
}