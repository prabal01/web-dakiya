const { PrismaClient } = require("@prisma/client");
const { template } = require("../../utils/templates");
const { verifyLoginToken } = require("../../utils/user-util");
const webpush = require("web-push")
const prisma = new PrismaClient()
require("dotenv").config();

exports.projectController =  (req, res) => {
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

const 

exports.createProject = (req, res) => {
  const { userEmail } = req.userInfo
  const {projectName} = req.body
  console.log("🚀 ~ file: project-controller.js:29 ~ projectName:", projectName)
  console.log("🚀 ~ file: project-controller.js:24 ~ userEmail:", userEmail)
  if (!userEmail) {
    res.status(401).send({message:"Unauthorized request"})
  } else {
    const vapidKeys = webpush.generateVAPIDKeys()
    const { publicKey, privateKey } = vapidKeys
   res.status(200)

  }
  
}
