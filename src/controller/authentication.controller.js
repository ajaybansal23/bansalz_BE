const jwt = require('jsonwebtoken');

const logout = (req, res) => {
  req.logout();
  res.status(200);
  res.send();
};

const sendAuthenticationData = (req, res) => {
  console.log("authentication is success. Now returning user object");
  const userInfo = req.user;
  const token = req.cookies.token;
  const decoded = jwt.verify(token, "secret123");
  console.log("decoded token is " + JSON.stringify(decoded));
  res.status(200);
  res.send({ userInfo, expiresAt: decoded.exp, token });
};

const redirectToLoginSuccess = (req, res) => {
  return res.redirect(`/auth/login/success`);
};

module.exports = {
  logout,
  redirectToLoginSuccess,
  sendAuthenticationData,
};
