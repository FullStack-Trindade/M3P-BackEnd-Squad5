const yup = require("yup");

const schema = yup.object().shape({
  fullName: yup
    .string("O nome deve ser uma string")
    .min(8, "Numero minimo de caracteres é 8")
    .max(64, "Numero minimo de caracteres é 64")
    .required("nome é obrigatório"),
});

module.exports = schema;
