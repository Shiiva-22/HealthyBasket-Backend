const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendError = require("../utils/sendError");
const { sendToken, sendCookie } = require("../utils/sendToken");

// User Register
const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const isUserExist = await userModel.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: ["Oops! Email Already Exists..!!"],
      });
    }

    if (password !== confirmPassword) {
      return sendError(res, 400, ["Passwords Field Mismatch"]);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully..!!",
      newUser,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      sendError(res, 400, Object.values(errors));
    } else {
      sendError(res, 400, ["Something Went Wrong..!!"]);
    }
  }
};

// User Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return sendError(res, 400, "Invalid Email & Password");

    const isUserExist = await userModel.findOne({ email });
    if (!isUserExist) return sendError(res, 400, "Invalid Email & Password");

    const isPassMatch = await bcrypt.compare(password, isUserExist.password);
    if (!isPassMatch) return sendError(res, 400, "Invalid Email & Password");

    const token = await sendToken(isUserExist._id);
    await sendCookie(res, 200, token, isUserExist, "User Login Successfully..!!");
  } catch (error) {
    console.log(error.message);
    sendError(res, 500, error.message);
  }
};

// Change User Password
const changeUserPassword = async (req, res) => {
  try {
    const { password, confirm_password } = req.body;

    if (!password || !confirm_password) {
      return sendError(res, 400, "All Fields Required");
    }

    if (password !== confirm_password) {
      return sendError(res, 400, "Passwords Field Mismatch");
    }

    if (password.length < 4) {
      return sendError(res, 400, "Password: Minimum Four Characters");
    }

    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(password, salt);
    const user = await userModel.findById(req.user._id);
    user.password = newHashPassword;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Password Updated..!!",
    });
  } catch (error) {
    console.log(error);
    sendError(res, 400, error.message);
  }
};

// Get Logged User Data
const getLoggedUser = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

// Send Password Reset Email To User
const sendUserPasswordResetEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return sendError(res, 400, "Email Field Is Required..!!");

    const isUserExist = await userModel.findOne({ email });
    if (!isUserExist) return sendError(res, 400, "User Not Exist");

    const token = jwt.sign(
      { userId: isUserExist._id },
      process.env.JWT_RESET_PASSWORD_SECRET_KEY,
      { expiresIn: "5m" }
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const link = `${req.protocol}://${req.get("host")}/reset-password/${isUserExist._id}/${token}`;

    await transporter.sendMail({
      from: `"E-SHOP Support" <${process.env.SMTP_MAIL}>`,
      to: isUserExist.email,
      subject: "E-SHOP - Password Reset Link",
      html: `
        <h2>Hello ${isUserExist.firstName}</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${link}">Reset Password</a>
      `,
    });

    res.status(200).json({
      success: true,
      message: `Password Reset Link Sent To ${isUserExist.email}`,
    });
  } catch (error) {
    console.log(error);
    sendError(res, 400, "Please Enter Email");
  }
};

// Password Reset
const userPasswordReset = async (req, res) => {
  try {
    const { password, confirm_password } = req.body;
    const { id, token } = req.params;

    await jwt.verify(token, process.env.JWT_RESET_PASSWORD_SECRET_KEY);

    if (!password || !confirm_password) {
      return sendError(res, 400, "All Fields Are Required..!!");
    }

    if (password !== confirm_password) {
      return sendError(res, 400, "Both Password Fields Do Not Match..!!");
    }

    if (password.length < 4) {
      return sendError(res, 400, "Password: Minimum Four Characters");
    }

    const user = await userModel.findById(id);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password Reset Successfully..!!",
    });
  } catch (error) {
    if (error.message === "jwt expired") {
      return sendError(res, 400, "Invalid or Expired Token");
    }
    sendError(res, 400, "Something Went Wrong..!!");
  }
};

// Logout
const loggedOutUser = (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out Successfully..!!",
  });
};

// Admin - Get All Users
const adminGetAllUsers = async (req, res) => {
  try {
    const userDocCount = await userModel.countDocuments();
    const allUsers = await userModel.find().sort({ _id: -1 });

    res.status(200).json({
      success: true,
      allUsers,
      userDocCount,
      message: "All Users Retrieved Successfully..!!",
    });
  } catch (error) {
    console.log(error);
    sendError(res, 400, "Something Went Wrong..!!");
  }
};

// Admin - Delete User
const AdminDeleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) return sendError(res, 400, "User ID Not Found");

    const isUserExist = await userModel.findById(userId);
    if (!isUserExist) return sendError(res, 400, "User Not Found");

    const deletedUser = await userModel.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully..!!",
      deletedUser,
    });
  } catch (error) {
    sendError(res, 400, "Something Went Wrong");
  }
};

// Admin - Update User Role
const adminUpdateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    if (!userId) return sendError(res, 400, "User ID Not Provided");

    const isUserExist = await userModel.findById(userId);
    if (!isUserExist) return sendError(res, 400, "User Not Found");

    isUserExist.role = role;
    await isUserExist.save();

    res.status(200).json({
      success: true,
      message: "User Role Updated..!!",
      user: isUserExist,
    });
  } catch (error) {
    console.log(error.message);
    sendError(res, 400, "Something Went Wrong..!!");
  }
};

module.exports = {
  userRegister,
  userLogin,
  changeUserPassword,
  getLoggedUser,
  sendUserPasswordResetEmail,
  userPasswordReset,
  loggedOutUser,
  adminGetAllUsers,
  AdminDeleteUser,
  adminUpdateUser,
};
