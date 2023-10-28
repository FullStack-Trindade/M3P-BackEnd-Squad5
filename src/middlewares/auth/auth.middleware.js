const jwt = require("jsonwebtoken");
const User = require("../../database/models/user.model");
const {
  env: { JWT_SECRET },
} = process;

module.exports.authVerify = async (req, res, next) => {
  try {
    const tokenHeader = req.headers["authorization"];
    console.log(tokenHeader);
    const token = tokenHeader && tokenHeader.split(" ")[1];
    console.log(token);
    if (!token) {
      const err = new Error("não autorizado!");
      err.code = 401;
      throw err;
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    res.locals.currentUser = await User.findOne({where: {email: decoded.name}})
    next();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
