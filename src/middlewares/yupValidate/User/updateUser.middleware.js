const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  console.log("Entrou no validador");
  try {
    const schema = yup.object().shape({
      fullName: yup
        .string("Campo nome deve ser uma string")
        .min(8, "Campo nome deve conter no mínimo 8 caracteres")
        .max(64, "Campo nome deve conter no máximo 64 caracteres")
        .required("Campo nome é obrigatório"),
      gender: yup
        .mixed()
        .oneOf(
          ["male", "female", "other"],
          "Campo genero deve possuir um dos seguintes valores: male, female, other"
        )
        .required("Campo genero é obrigatório"),
      phoneNumber: yup
        .string("Tipo de numero inválido")
        .trim()
        .matches(/\d{10,11}/, "Campo telefone deve conter de 10 a 11 números")
        .required("Campo telefone obrigatório"),
      password: yup
        .string()
        .min(6, "Campo de senha deve conter no mínimo 6 caracteres")
        .required("Campo de senha é obrigatório"),
      type: yup
        .mixed()
        .oneOf(
          ["admin", "medic", "nurse"],
          "Campo tipo deve possuir um dos seguintes valores: admin, medic, nurse, patient"
        )
        .required("campo tipo é obrigatório"),
    });

    await schema.validate(req.body, { abortEarly: false }).then(() => next());
  } catch (err) {
    res
      .status(400)
      .send({ type: err.name, message: err.message, errors: err.errors });
  }
};
