const User = require("../../../database/models/user.model");
const { Password } = require("../../../services");

module.exports.resetUserPassword = async (req, res) => {
  const {
    body: { id, email, password },
  } = req;

  try {
    const [user] = await User.update(
      { password: await Password.encrypt(password) },
      { where: { id, email } }
    );

    if (user) {
      return res.status(200).send({ message: "Senha atualizada com sucesso" });
    } else {
      const err = new Error("Usuário não localizado");
      err.code = 400;
      throw err;
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
