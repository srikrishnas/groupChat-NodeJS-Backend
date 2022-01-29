const e = require("cors");
const { users_main } = require("../../models");

const login = (data) => {
  console.log("HERE::::::::")
  return users_main
    .findOne({
      where: {
        user_name: data.user_name,
        user_password: data.password,
      },
      raw: true,
    })
    .then((result) => {
        return result;
    })
    .catch((error) => {
      console.log("ERROR::::::", error);
      throw error;
    });
};

module.exports = { login };
