const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const loginModel = require('./src/models/loginModel');


const PORT = process.env.PORT || 3000;

app.get('/login', async (req, res) => {
  const { name } = req.body;
  const user = await loginModel.findUser(name);
  res.status(200).json(user)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
})