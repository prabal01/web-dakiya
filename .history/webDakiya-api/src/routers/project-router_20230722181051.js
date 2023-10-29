const { Router } = require("express");
const { loginController } = require("../controllers/user/login-controller");
const jwt = require("jsonwebtoken");
const {
  signupController,
  validateUserData,
} = require("../controllers/user/signup-controller");
const { PrismaClient } = require("@prisma/client");
const { JsonWebTokenError } = require("jsonwebtoken");
const {
  projectController, getVapidId,
} = require("../controllers/project/project-controller");
const prisma = new PrismaClient();
const projectRouter = Router();

projectRouter.post("/project", projectController);
projectRouter.get("/getVapidKey", getVapidId);

module.exports = projectRouter;
