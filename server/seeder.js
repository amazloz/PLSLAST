import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import interests from "./data/interests.js";
import users from "./data/users.js";
import Interest from "./models/interestModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

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
