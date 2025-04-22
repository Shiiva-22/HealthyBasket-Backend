const jwt = require("jsonwebtoken");

const sendToken = async (userId) => {
  return await jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: `1d`,
  });
};

const sendCookie = async (res, statusCode, token, user, message) => {
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, options);
   // token: token,
   console.log(`Token: ${token}`);
  res.status(statusCode).json({
    success: true,
    message,
    user,
    token,
   
  });
};
// console.log(sendToken);
module.exports = { sendToken, sendCookie };
