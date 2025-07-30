const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  });
};

module.exports = connectDB;
