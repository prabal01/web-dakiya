const { template } = require("../../utils/templates");
const { verifyLoginToken } = require("../../utils/user-util");

require("dotenv").config();

exports.projectController = async (req, res) => {
  const { authorization} = req.headers;
  if(!authorization){
      res.send("Unauthorized request");
      return;
  }
  const token = authorization.split(" ")[1];
  if(!token){
      res.send("Unauthorized request");
      return;
  }
  
  //   verifyLoginToken("asdfasdf");
  res.status(200);
};

exports.getVapidId = (req, res) => {
  const { userEmail } = req.userInfo
  console.log("🚀 ~ file: project-controller.js:24 ~ userEmail:", userEmail)
  if (!userEmail) {
    res.status(401).send({message:"Unauthorized request"})
  }
  
}