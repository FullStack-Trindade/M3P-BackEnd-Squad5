const User = require("../../../database/models/user.model");

module.exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).send({ data: users });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
