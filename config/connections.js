const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReactionApp");
    console.log("+++ MONGODB ONLINE");
  } catch (err) {
    console.log(err, "--- MONGODB OFFLINE");
  }
};

module.exports = connectDB;
