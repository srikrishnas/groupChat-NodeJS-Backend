const authenticationBuisness = require("../buisnessLogic/authenticationBuisness");


// LOGIN 
const login = (req, res) => {
  console.log(req.body);
  authenticationBuisness
    .login(req.body)
    .then((result) => {
      console.log("Controller Login::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

module.exports = { login };
