const User = require("../../../database/models/user.model");

const { formatPhoneNumber } = require("../../../services");

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
      password,
    });
    return res.status(201).send({});
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
