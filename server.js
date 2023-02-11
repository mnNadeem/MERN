// npm run server

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("I am MERN Stack Developer");
});


