const logout = (req, res) => {
  req.logout();
  res.status(200);
  res.send();
};

const sendAuthenticationData = (req, res) => {
  console.log("authentication is success. Now returning user object");
  res.status(200);
  res.send({ user: req.user });
};

const redirectToUI = (req, res) => {
  console.log(
    "got redirect back from google..and user is authenticated successfully"
  );

  console.log("sending response to ----> UI");
  // req.app.set('user', res.req.user)
  res.cookie("cookieName", "cookieValue");
  res.cookie("userID", res.req.user._id);
  return res.redirect(`/secure/home`);
};

module.exports = {
  logout,
  redirectToUI,
  sendAuthenticationData,
};
