const User = require("../../../database/models/user.model");

const { formatPhoneNumber, Password } = require("../../../services");

module.exports.createNewUser = async (req, res) => {
  try {
    const {
      body: {
        fullName,
        gender,
        email,
        cpf,
        phoneNumber,
        type,
        systemStatus,
        password,
      },
    } = req;

    await User.create({
      fullName,
      gender,
      email,
      cpf,
      phoneNumber: formatPhoneNumber(phoneNumber),
      type,
      systemStatus,
      password: await Password.encrypt(password),
    });

    return res.status(201).send({});
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
