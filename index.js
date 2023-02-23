const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const loginModel = require('./src/models/connection');


const PORT = process.env.PORT || 3000;

app.get('/login', async (_req, res) => {
  const user = await loginModel.findUser();
  res.status(200).json({user})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
})