const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { genrateLoginToken } = require("../../utils/user-util");
const prisma = new PrismaClient();
require("dotenv").config();

exports.loginController = async (req, res) => {
  console.log("here");
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({ where: { email } });
    if (user === null) {
      res.status(401).json({ msg: "Invalid email or password" });
    } else {
      const isVerified = await bcrypt.compare(password, user.password);
      if (isVerified) {
        const token = genrateLoginToken(email);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ msg: "Invalid email or password" });
      }
    }
    res.status(200);
  } catch (error) {
    res.status(400);
  }
};
