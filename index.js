const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const loginController = require('./src/controllers/loginController');


const PORT = process.env.PORT || 3000;

app.post('/login', loginController.findUser);  


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
})