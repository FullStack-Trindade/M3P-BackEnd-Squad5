const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      name: yup
        .string("Campo nome do exame deve ser uma string")
        .min(8, "Campo nome do exame deve conter no mínimo 8 caracteres")
        .max(64, "Campo nome do exame deve conter no máximo 64 caracteres")
        .required("Campo nome do exame é obrigatório"),
      examDate: yup
        .date("Campo de data tem que ser uma data válida")
        .required("Campo de data do exame é obrigatório"),
      examTime: yup
        .string("Campo de tempo tem que ser uma string")
        .required("Campo de horário do exame é obrigatório"),
      examType: yup
        .string("Campo tipo do exame deve ser uma string")
        .min(4, "Campo tipo do exame deve conter no mínimo 4 caracteres")
        .max(32, "Campo tipo do exame deve conter no máximo 32 caracteres")
        .required("Campo tipo do exame é obrigatório"),
      laboratory: yup
        .string("Campo laboratório deve ser uma string")
        .min(4, "Campo laboratório deve conter no mínimo 4 caracteres")
        .max(32, "Campo laboratório deve conter no máximo 32 caracteres")
        .required("Campo laboratório é obrigatório"),
      documentURL: yup.string("Campo do documento deve ser uma string"),
      results: yup
        .string("Campo de resultados deve ser uma string")
        .min(16, "Campo de resultados deve conter no mínimo 16 caracteres")
        .max(1024, "Campo de resultados deve conter no máximo 1024 caracteres")
        .required("Campo de resultados é obrigatório"),
      patientId: yup
        .number()
        .integer()
        .positive()
        .required("Id do Paciente é obrigatório"),
      userId: yup
        .number()
        .integer()
        .positive()
        .required("Id do Usuário é obrigatório"),
      systemStatus: yup
        .mixed()
        .oneOf(
          [true],
          "Campo Status do Sistema deve iniciar como um boolean com valor true"
        ),
    });

    await schema.validate(req.body, { abortEarly: false }).then(() => next());
  } catch (err) {
    res
      .status(400)
      .send({ type: err.name, message: err.message, errors: err.errors });
  }
};
