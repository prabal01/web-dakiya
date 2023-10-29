const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
require("dotenv").config();
const bcrypt = require("bcrypt");
const {
  generateAndSendAccountConfirmationToken,
} = require("../../utils/genrate-account-token");

exports.validateUserData = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) {
    res.status(401).json({ msg: "Invalid data" });
  }
  if (!validator.isEmail(email)) {
    res.status(401).json({ msg: "Please enter a valid email!" });
  } else if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      returnScore: false,
    })
  ) {
    res.status(401).json({ msg: "Please enter a stronger password!" });
  } else if (
    !validator.isLength(firstName, { min: 4 }) ||
    !validator.isLength(lastName, { min: 4 })
  ) {
    res
      .status(401)
      .json({ msg: "first name and last name should be atleas 4 char long" });
  } else {
    const user = await prisma.user.findFirst({ where: { email } });
    if (user) {
      res.status(401).json({ msg: "User with this email already exists!" });
    } else next();
  }
};
exports.signupController = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  try {
    const userData = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    generateAndSendAccountConfirmationToken(email, userData.id);
    res.status(200).json({ token });
  } catch (error) {
    res.send(createError("400", "something went wrong!"));
  }
};
