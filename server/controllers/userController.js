const asyncHandler = require("../middleware/asyncHandler.js");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Auth user & get toekn
// @route GET /api/users/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    birthdate,
    gender,
    nativelanguage,
    learninglanguage,
    interest,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  } else {
    const user = await User.create({
      name,
      email,
      password,
      birthdate,
      gender,
      nativelanguage,
      learninglanguage,
      interest,
    });

    if (user) {
      generateToken(res, user._id);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("jwt", { httpOnly: true });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc Get user profile
// @route GET /api/users/userprofile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      gender: user.gender,
      nativelanguage: user.nativelanguage,
      learninglanguage: user.learninglanguage,
      interest: user.interest,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Update user profile
// @route PUT /api/users/userprofile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.birthdate = req.body.birthdate || user.birthdate;
    user.gender = req.body.gender || user.gender;
    user.nativelanguage = req.body.nativelanguage || user.nativelanguage;
    user.learninglanguage = req.body.learninglanguage || user.learninglanguage;
    user.interest = req.body.interest || user.interest;

    const updatedUser = await User.findByIdAndUpdate(req.user._id, user, {
      new: true,
    });
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      birthdate: user.birthdate,
      gender: user.gender,
      nativelanguage: user.nativelanguage,
      learninglanguage: user.learninglanguage,
      interest: user.interest,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
};
