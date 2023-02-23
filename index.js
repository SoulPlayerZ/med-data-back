const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/login', (_req, res) => {
  res.send('Initial Commit')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
})