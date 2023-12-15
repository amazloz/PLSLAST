const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const interests = require("./data/interests.js");
const users = require("./data/users.js");
const Interest = require("./models/interestModel.js");
const User = require("./models/userModel.js");
const connectDB = require("./config/db.js");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Interest.deleteMany();
    await User.deleteMany();
    await Interest.insertMany(interests);
    await User.insertMany(users);
    console.log("Data imported successfully".green.inverse);
    process.exit();
  } catch (err) {
    console.log(colors.red(err));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Interest.deleteMany();
    await User.deleteMany();
    console.log("Data destroyed successfully".red.inverse);
    process.exit();
  } catch (err) {
    console.log(colors.red(err));
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
