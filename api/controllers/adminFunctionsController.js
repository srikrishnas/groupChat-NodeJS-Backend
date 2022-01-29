const adminFunctionsBusiness = require("../buisnessLogic/adminFunctionsBusiness.js");

const createUser = (req, res) => {
  console.log("Entering Into Admin Controller",req.body);
  const { role } = req.body;
  if(role === "ADMIN"){
    adminFunctionsBusiness
    .createUser(req.body)
    .then((result) => {
      console.log("Controller server list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
  } else {
    res.json({ status: 200, message: "NO ACCESS" });
  }
};

const deleteUser = (req, res) => {
  console.log("Entering Into Admin Controller",req.body);

  const { role } = req.body;
  console.log("ROLE::::",role)
  if(role === "ADMIN"){
    adminFunctionsBusiness
    .deleteUser(req.body)
    .then((result) => {
      console.log("Controller server list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
  } else {
    res.json({ status: 200, message: "NO ACCESS" });
  }
};


const updateUser = (req, res) => {
  console.log("Entering Into Admin Controller",req.body);
  const { role } = req.body;
  if(role === "ADMIN"){
    adminFunctionsBusiness
    .updateUser(req.body)
    .then((result) => {
      console.log("Controller server list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
  } else {
    res.json({ status: 200, message: "NO ACCESS" });
  }
};

const getAllUsers = (req, res) => {
  console.log("Entering Into Admin Controller",req.body);
  const { role } = req.body;
  if(role === "ADMIN"){
    adminFunctionsBusiness
    .getAllUsers(req.body)
    .then((result) => {
      console.log("Controller server list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
  } else {
    res.json({ status: 200, message: "NO ACCESS" });
  }
};

module.exports = { createUser, deleteUser, updateUser, getAllUsers};
