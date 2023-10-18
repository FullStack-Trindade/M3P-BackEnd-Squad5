const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      email: yup
        .string("type de email é invalido")
        .min(2, "Email deve conter pelo menos 3 caracteres")
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Formato do e-mail não é valido"
        )
        .required("Campo e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "Campo de senha deve conter no mínimo 6 caracteres")
        .required("Campo de senha é obrigatório"),
    });

    await schema.validate(req.body, { abortEarly: false }).then(() => next());
  } catch (err) {
    res
      .status(400)
      .send({ type: err.name, message: err.message, errors: err.errors });
  }
};
