require("./db.js");
const cors = require("cors");
const express = require("express");

const userroutes = require("../b/routes/userroutes.js");

const app = express();
app.use(express.json()); //parsing every data into json
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //cross origin resource sharing
app.set("PORT", process.env.PORT || 5000);

app.listen(app.get("PORT"), function (err, done) {
  if (err) {
    console.log("Server failed to run");
  } else {
    console.log("Server running on port - ", app.get("PORT"));
  }
});
app.use("/api", userroutes);
