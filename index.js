const express = require("express");
const bodyParser = require('body-parser');
const { validateJWT } = require('./src/auth/validateJWT');
const app = express();
app.use(bodyParser.json());

const loginController = require('./src/controllers/loginController');


const PORT = process.env.PORT || 3000;

app.route('/login')
  .get(validateJWT, loginController.getUsers)
  .post(loginController.generateToken);  




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
})