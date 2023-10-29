const { verifyLoginToken } = require("../utils/user-util");

require("dotenv").config();

exports.authRequest = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send({ message: "Unauthorized request" });
    return;
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    res.status(401).send({ message: "Unauthorized request" });
    return;
  }
  const userInfo = verifyLoginToken(token)
  console.log("🚀 ~ file: auth-request.js:17 ~ exports.authRequest= ~ userInfo:", userInfo)
  req.userInfo = {
email:userInfo.email
  }
  console.log("here");
  //   verifyLoginToken("asdfasdf");
  res.status(200)
  next();
};
