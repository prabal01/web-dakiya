const { verifyLoginToken } = require("../utils/user-util");

require("dotenv").config();

exports.authRequest = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.send("Unauthorized request");
    return;
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    res.send("Unauthorized request");
    return;
  }
  console.log(verifyLoginToken(token));
  console.log("here");
  //   verifyLoginToken("asdfasdf");
  res.status(200);
  return;
};
