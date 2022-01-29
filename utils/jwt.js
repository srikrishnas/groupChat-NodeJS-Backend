const jwt = require("jsonwebtoken");

const secretKey = "abcd123";

const jwtSign = (payload) => {
  try {
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
  } catch (error) {
    return error;
  }
};

const jwtVerify = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    let a = jwt.verify(authorization, secretKey);
    if (!a.role || !a.name) {
      res.status("error");
      res.send();
    }
    req.body.role = a.role;
    req.body.name = a.name;
    console.log("VERIFIED JWT:::::::", req.body);
    next();
  } catch (error) {
    res.status("ERROR");
    // res.send();
    return res.send();
  }
};

module.exports = { jwtSign, jwtVerify };
