const yup = require("yup");

module.exports.validate = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      fullName: yup
        .string("O nome deve ser uma string")
        .min(8, "Numero minimo de caracteres é 8")
        .max(64, "Numero minimo de caracteres é 64")
        .required("nome é obrigatório"),
    });

    schema.validate(req.body);
    return next();
  } catch (error) {
    return res.status(400).send({ type: err.name, message: err.message });
  }
};
