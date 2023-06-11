const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("+++ MONGODB ONLINE");
  } catch (err) {
    console.log(err, "--- MONGODB OFFLINE");
  }
};

module.exports = connectDB;
