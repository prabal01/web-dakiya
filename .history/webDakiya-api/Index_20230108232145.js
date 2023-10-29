const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./src/routers/user-router");
const scriptRouter = require("./src/routers/script-router");
const cors = require("cors");
const projectRouter = require("./src/routers/project-router");
const { authRequest } = require("./src/controllers/auth-request");

const app = express();
const port = 4444;
app.use(cors());
app.use(bodyParser());
app.use(express.static("public"));
app.use("/", userRouter);
app.use("/api", authRequest, projectRouter);
app.use("/script", scriptRouter);

// app.use("/", () => console.log("ldjlsjdldls"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
