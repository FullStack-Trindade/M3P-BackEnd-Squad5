const userValidate = require("../../../services/yupValidate/user.validate");
const User = require("../../../database/models/user.model");

module.exports.createNewUser = async (req, res) => {
  try {
    // checkEmptyField(req.body);
    // userValidate
    //   .validate(req.body)
    //   .then()
    //   .catch((e) => {
    //     const err = new Error(e.errors[0]);
    //     err.code = 400;
    //     throw err;
    //   });
    const yup = require("yup");

    const schema = yup.object().shape({
      fullName: yup
        .string("O nome deve ser uma string")
        .min(8, "Numero minimo de caracteres é 8")
        .max(64, "Numero minimo de caracteres é 64")
        .required("nome é obrigatório"),
    });

    schema.validate(req.body);

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
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
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
