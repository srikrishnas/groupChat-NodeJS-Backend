const checkUserLogin = require("../service/authenticationService.js");
const jwtCalls = require("../../utils/jwt.js")

// Login USER/ADMIN
const login = async (data) => {
  try {
    const loginData = await checkUserLogin.login(data);

    if(!loginData){
      return { message: "User Doesnt Exist, Create New Account"}
    }
    const payload = {
      role: loginData.user_role,
      name: loginData.user_name,
    }
    return { authToken: jwtCalls.jwtSign(payload) , message: `Welocme Back ${loginData.user_name}`};
  } catch (error) {
    return error;
  }
};

module.exports = { login };
