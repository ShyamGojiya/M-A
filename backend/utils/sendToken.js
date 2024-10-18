const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToekn();

  const option = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: false,
    sameSite: "None",
  };

  res.status(statusCode).cookie("token", token, option).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
