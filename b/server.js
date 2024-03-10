const express = require("express");
const app = express();
const port = 5000; // Change this line to set a different port number

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
