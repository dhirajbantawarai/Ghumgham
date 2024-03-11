const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      let user = new User({
        username: req.body.name,
        email: req.body.email,
        password: hashedPass,
        phone: req.body.phone,
      });

      user
        .save()
        .then((user) => {
          res.json({
            message: "User created successfully!!",
          });
        })
        .catch((error) => {
          res.json({
            message: "An error occurred!",
          });
        });
    }
  });
};

module.exports = {
  signup,
};
