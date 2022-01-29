const { users_main } = require("../../models");

//check if already exists
const createUser = (data) => {
  console.log("CREATE SERVICE", data);
  return users_main
    .create(data)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("CREATE USER ERROR::::::", error);
      throw error;
    });
};

//if user not present handle error
const deleteUser = (data) => {
  console.log("DELETE SERVICE", data);
  return users_main
    .destroy({
      where: {
        user_name: data.user_name,
      },
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("DELETE ERROR::::::", error);
      throw error;
    });
};

const updateUser = (data) => {
  return users_main
    .findOne({
      where: {
        user_name: data.user_name_to_be_changed,
      }
    })
    .then((logData) => {
      users_main.update(data, {
        where: {
          id: logData.dataValues.id,
          user_name: logData.dataValues.user_name,
        },
        limit: 1,
      });
    })
    .catch((error) => {
      throw error;
    });
};

const getAllUsers = () => {
  console.log("GET ALL USERS SERVICE");
  return users_main
    .findAll()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("getAllUsers ERROR::::::", error);
      throw error;
    });
};

module.exports = { createUser, deleteUser, updateUser, getAllUsers };
