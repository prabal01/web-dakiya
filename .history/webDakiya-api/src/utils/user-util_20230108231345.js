const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.genrateLoginToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

exports.verifyLoginToken = (token) => {
  console.log("verifyLoginToken", token);
  return jwt.verify(token, process.env.JWT_SECRET);
};
