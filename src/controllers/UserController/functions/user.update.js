const User = require("../../../database/models/user.model");
const { formatPhoneNumber, Password } = require("../../../services");
const {log} = require("../../../services/logger");

module.exports.updateUser = async (req, res) => {
  console.log("bateu na função");
  try {
    const {
      params: { id },
      body: { fullName, gender, phoneNumber, type, password },
    } = req;

    const [user] = await User.update(
      {
        fullName,
        gender,
        phoneNumber: formatPhoneNumber(phoneNumber),
        type,
        password: await Password.encrypt(password),
      },
      { where: { id } }
    );

    if (user == 0) {
      return res.status(400).send({ message: "Usuário não encontrado" });
    } else {
      await log(res.locals.currentUser, `o usuário ${fullName}`, req);
      return res
        .status(200)
        .send({ message: "Usuário atualizado com sucesso" });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
