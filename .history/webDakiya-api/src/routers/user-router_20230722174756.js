  const { Router } = require("express");
  const { loginController } = require("../controllers/user/login-controller");
  const jwt = require("jsonwebtoken");
  const {
    signupController,
    validateUserData,
  } = require("../controllers/user/signup-controller");
  const { PrismaClient } = require("@prisma/client");
  const { JsonWebTokenError } = require("jsonwebtoken");
  const prisma = new PrismaClient();
  const userRouter = new Router();

  userRouter.post("/signup", validateUserData, signupController);
  userRouter.post("/login", loginController);
  userRouter.get("/verify", async (req, res) => {
    let { token, tokenId } = req.query;
    tokenId = parseInt(tokenId);
    if (tokenId == Number.isNaN(tokenId)) {
      res.status(400).json({ msg: "invalid token" });
    }
    try {
      if (!token) {
        res.status(400).json({ msg: "invalid token" });
      } else {
        const savedToken = await prisma.accountTokens.findFirst({
          where: { id: parseInt(tokenId) },
        });
        if (savedToken.token !== token) {
          res.status(400).json({ msg: "invalid token" });
        } else {
          await prisma.user.update({
            where: { id: savedToken.userId },
            data: { isActive: true },
          });
          await prisma.accountTokens.delete({ where: { id: tokenId } });
          res.status(200).json({ msg: "account verified" });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: "Invalid/Expired token" });
    }

    res.status(200);
  });

  module.exports = userRouter;
