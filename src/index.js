const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = 7777;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://socialmedia07.netlify.app/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const profileRouter = require("./routes/profile");

app.use("/", authRouter);
app.use("/", postRouter);
app.use("/", profileRouter);

connectDB()
  .then(() => {
    console.log("DB is connecting now ");
    app.listen(port, () => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log(err));
