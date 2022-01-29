const userFunctionsBuisness = require("../buisnessLogic/userFunctionsBusiness.js");

const getAllGroups = (req, res) => {
  console.log("Entering Into GetAllUsers Controller", req.body);
  userFunctionsBuisness
    .getAllGroups()
    .then((result) => {
      console.log("Controller group list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

const createGroup = (req, res) => {
  console.log("Entering Into createGroup Controller", req.body);
  userFunctionsBuisness
    .createGroup(req.body)
    .then((result) => {
      console.log("Controller group list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

const deleteGroup = (req, res) => {
  console.log("Entering Into deleteGroup Controller", req.body);
  userFunctionsBuisness
    .deleteGroup(req.body)
    .then((result) => {
      console.log("Controller group list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

const addMembers = (req, res) => {
  console.log("Entering Into GetAllUsers Controller", req.body);
  userFunctionsBuisness
    .addMembers(req.body)
    .then((result) => {
      console.log("Controller group list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

const sendMessage = (req, res) => {
  console.log("Entering Into GetAllUsers Controller", req.body);
  userFunctionsBuisness
    .sendMessage(req.body)
    .then((result) => {
      console.log("Controller group list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

const likeMessage = (req, res) => {
  console.log("Entering Into GetAllUsers Controller", req.body);
  userFunctionsBuisness
    .likeMessage(req.body)
    .then((result) => {
      console.log("Controller group list::::", JSON.stringify(result));
      res.json(result);
    })
    .catch((err) => {
      console.log("Controller ERROR::::::::", err);
      res.json({ status: 400, message: "Login Failed Due to Internal Error" });
    });
};

module.exports = { getAllGroups, createGroup, deleteGroup, addMembers, sendMessage, likeMessage };
