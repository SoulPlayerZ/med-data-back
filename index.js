const express = require("express");
const loginModel = require('./models/loginModel');

const app = express();

const port = 3000;

app.get('/', async (_req, res) => {
  // const { login } = req.body;
  const user = await loginModel.findUsers();
  
  return res.status(200).json(user);
 

})


app.listen(port, () => {
  console.log(`Listening on port ${port}` );
})