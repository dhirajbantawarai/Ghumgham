const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://reswantrai:pass@cluster0.qcnt8w3.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.error("Db connection failed- ", err);
  });
