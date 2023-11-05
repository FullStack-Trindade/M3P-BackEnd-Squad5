const User = require("../../../database/models/user.model");
const { log } = require("../../../services/logger");

module.exports.findOneUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    if (id && isNaN(id)) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      const err = new Error("Usuário não encontrado");
      return res.status(400).send(` message: ${err} `);
    }
    await log(res.locals.currentUser, `o usuario ${id}`, req, user.id);
    return res.status(200).send({ data: user });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
