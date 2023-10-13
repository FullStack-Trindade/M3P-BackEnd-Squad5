const User = require("../../../database/models/user.model");

module.exports.createNewUser = async (req, res) => {
  try {
    checkEmptyField(req.body);
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
      phoneNumber,
      type,
      systemStatus,
      password,
    });
    return res.status(201).send({});
  } catch (error) {
    return res.status(error.code || 500).send({ message: error.message });
  }

  function checkEmptyField(body) {
    const fields = [
      "fullName",
      "gender",
      "email",
      "cpf",
      "phoneNumber",
      "type",
      "systemStatus",
      "password",
    ];
    const tempArr = [];
    fields.forEach((field) => {
      !body[field] && tempArr.push(field);
    });
    if (tempArr.length > 0) {
      const error = new Error(`Missing field(s): ${tempArr.join(", ")}`);
      error.code = 400;
      throw error;
    }
  }
};
