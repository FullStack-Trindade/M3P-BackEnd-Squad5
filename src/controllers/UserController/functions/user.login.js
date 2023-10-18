const jwt = require("jsonwebtoken");

const User = require("../../../database/models/user.model");

const { Password } = require("../../../services");

const {
  env: { JWT_SECRET },
} = process;

module.exports.userLogin = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      const err = new Error("Usuário / Senha invalido(s)");
      err.code = 401;
      throw err;
    }

    const validatePassword = Password.compare(password, user.password);

    if (!validatePassword) {
      const err = new Error("Usuário / Senha invalido(s)");
      err.code = 401;
      throw err;
    }

    const access_token = jwt.sign({ name: user.email }, JWT_SECRET);

    return res.status(200).send({
      message: "Usuário logado com sucesso",
      access_token,
    });
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
