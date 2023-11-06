const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  try {
    const addressSchema = {};
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
      birthday: yup
        .date()
        .min(
          new Date(1900, 1, 1),
          "não é possivel inserir uma data tão distante"
        )
        .max(new Date(), "Não é possível incluir uma data futura")
        .required("Campo data é obrigatório"),
      cpf: yup
        .string()
        .trim()
        .matches(
          /^(\d{3}[.]\d{3}[.]\d{3}[-]\d{2})/,
          "Campo cpf deve estar no formato 000.000.000-00"
        )
        .required("Campo cpf é obrigatório"),
      rg: yup
        .string()
        .max(20, "campo deve conter no máximo 20 caracteres")
        .required("Campo rg é obrigatório"),
      civilStatus: yup
        .mixed()
        .oneOf(
          ["single", "married", "divorced", "widowed", "separated"],
          "Campo estado civil deve ser um dos seguintes valores: single, married,divorced,widowed,separated"
        )
        .required("Campo estado civil é obrigatório"),
      phoneNumber: yup
        .string("Tipo de numero inválido")
        .trim()
        .matches(/\d{10,11}/, "Campo telefone deve conter de 10 a 11 números")
        .required("Campo telefone obrigatório"),
      email: yup
        .string("type de email é invalido")
        .min(2, "Email deve conter pelo menos 3 caracteres")
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Formato do e-mail não é valido"
        )
        .required("Campo e-mail é obrigatório"),
      nationality: yup
        .string()
        .min(8, "Campo naturalidade deve conter no mínimo 8 caracteres")
        .max(64, "campo naturalidade deve conter no máximo 64 caracteres")
        .required("Campo de senha é obrigatório"),
      emergencyContact: yup
        .string("Tipo de numero inválido")
        .trim()
        .matches(
          /\d{10,11}/,
          "Campo contato de emergencia deve conter de 10 a 11 números"
        )
        .required("Campo contato de emergencia obrigatório"),
      listOfAllergies: yup.string("Lista de alergias deve ser  do tipo string"),
      specificCare: yup.string("Lista de cuidados deve ser do tipo string"),
      healthInsurance: yup.string("Convenio deve ser do tipo string"),
      insuranceNumber: yup.string("Número do convenio deve ser do tipo string"),
      insuranceExpirationDate: yup
        .string(
          "Validade do convenio deve estar no formato YYYY-MM-DD e deve ser uma string"
        )
        .matches(
          /^(?:19|20)\d{2}-(?:(?:0?[1-9]|1[0-2])-(?:0?[1-9]|[12]\d|3[01])|(?:0?[1-9]|1[0-2])-(?:0?[1-9]|[12]\d|30)|(?:0?[13578]|1[02])-(?:0?[1-9]|1\d|2\d))$/
        ),
      systemStatus: yup
        .boolean("Campo deve iniciar com um boolean")
        .required("Campo Status do Sistema deve inicializar como ATIVO"),
      address: yup
        .object()
        .shape({
          zipCode: yup
            .string("Campo CEP deve ser do tipo string")
            .required("O campo CEP é obrigatório"),
          city: yup
            .string("Campo cidade deve ser do tipo string")
            .required("O campo cidade é obrigatório"),
          state: yup
            .string("Campo estado deve ser do tipo string")
            .required("O campo estado é obrigatório"),
          street: yup
            .string("Campo rua deve ser do tipo string")
            .required("O campo rua é obrigatório"),
          number: yup
            .string("Campo número deve ser do tipo inteiro")
            .required("O campo número é obrigatório"),
          complement: yup.string("Campo complemento deve ser do tipo string"),
          neighborhood: yup
            .string("Campo bairro deve ser do tipo string")
            .required("O campo bairro é obrigatório"),
          referencePoint: yup.string(
            "Campo referencia deve ser do tipo string"
          ),
        })
        .required("Campos de endereço são obrigatórios"),
    });

    await schema.validate(req.body, { abortEarly: false }).then(() => next());
  } catch (err) {
    res
      .status(400)
      .send({ type: err.name, message: err.message, errors: err.errors });
  }
};
