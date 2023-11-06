const User = require("../../../database/models/user.model");
const {log} = require("../../../services/logger");

module.exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    await log(res.locals.currentUser, `os usuários`, req);
    return res.status(200).send({ data: users });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
