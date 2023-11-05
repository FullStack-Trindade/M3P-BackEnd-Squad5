const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      primaryColor: yup
        .string("Campo de cor primária deve ser uma string")
        .required("Campo de cor primária é obrigatório"),
      secondaryColor: yup
        .string("Campo de cor secundária deve ser uma string")
        .required("Campo de cor secundária  é obrigatório"),
      primaryTextColor: yup
        .string("Campo de texto primário deve ser uma string")
        .required("Campo de texto primário é obrigatório"),
      secondaryTextColor: yup
        .string("Campo de texto secundário deve ser uma string")
        .required("Campo de texto secundário é obrigatório"),
      companyName: yup
        .string("Campo de nome da empresa deve ser uma string")
        .required("Campo de nome da empresa  é obrigatório"),
      slogan: yup
        .string("Campo de slogan deve ser uma string")
        .required("Campo  de slogan é obrigatório"),
      logo: yup
        .string("Campo de logo deve ser uma string")
        .required("Campo de logo é obrigatório"),

      userId: yup
        .number()
        .integer()
        .positive()
        .required("Id do Usuario e obrigatório"),
    });

    await schema.validate(req.body, { abortEarly: false }).then(() => next());
  } catch (err) {
    res
      .status(400)
      .send({ type: err.name, message: err.message, errors: err.errors });
  }
};
