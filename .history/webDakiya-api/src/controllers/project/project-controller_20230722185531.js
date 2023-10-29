const { PrismaClient } = require("@prisma/client");
const { template } = require("../../utils/templates");
const { verifyLoginToken } = require("../../utils/user-util");
const webpush = require("web-push")
const prisma = new PrismaClient()
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



exports.createProject = (req, res) => {
  const { userEmail } = req.userInfo
  const {projectName} = req.body
  console.log("🚀 ~ file: project-controller.js:29 ~ projectName:", projectName)
  console.log("🚀 ~ file: project-controller.js:24 ~ userEmail:", userEmail)
  if (!userEmail) {
    res.status(401).send({ message: "Unauthorized request" })
    return
  }else if (!projectName) {
    res.status(402).send({ message: "Invalid project name" })
    
   }
   // check for duplicate project name
  const projectFound = prisma.project.findFirst({ where: { name: projectName } })
  if (projectFound) {
res.status(400).send({message:"Duplicate project name"})
  }
  
  
}

