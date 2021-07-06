const userController = {
  register: function register(req, res) {
    console.log("register");
    res.send("Register");
  },
  login: function login(req, res) {
    console.log("login");
    res.send("Login");
  },
};

module.exports = userController;
