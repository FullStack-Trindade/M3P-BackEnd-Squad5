const yup = require("yup");

const exerciseType = [
  "aerobic endurance",
  "muscular endurance",
  "flexibility",
  "strength",
  "agility",
  "other",
];

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      exerciseName: yup
        .string("Campo nome de exercicio deve ser uma string")
        .min(5, "Campo nome de exercicio deve conter no mínimo 5 caracteres")
        .max(
          100,
          "Campo nome de exercicio deve conter no máximo 100 caracteres"
        )
        .required("Campo nome de exercicio é obrigatório"),
      date: yup
        .date("Campo de data tem que ser uma data válida")
        .required("Campo de data é obrigatório"),
      time: yup
        .string("Campo de tempo tem que ser uma string")
        .required("Campo de tempo é obrigatório"),
      exerciseType: yup
        .string("Campo tipo de exercicio deve ser uma string")
        .oneOf(
          exerciseType,
          "Campo tipo de exercicio deve ser um dos seguintes valores: " +
            exerciseType
        )
        .required("Campo tipo de exercicio é obrigatório"),
      quantityPerWeek: yup
        .number(
          "O campo de quantidade por semana é um número com pelo menos duas casas após a vírgula"
        )
        .test(
          "is-decimal",
          "O número deve ter pelo menos duas casas após a vírgula",
          (value) =>
            value === undefined ||
            value === null ||
            /^\d+(\.\d{2,})?$/.test(value.toString())
        )
        .required("Campo de quantidade  por semana é obrigatório"),
      description: yup
        .string("Campo descrição deve ser uma string")
        .min(10, "Campo descrição deve conter no mínimo 10 caracteres")
        .max(1000, "Campo descrição deve conter no máximo 1000 caracteres")
        .required("Campo descrição é obrigatório"),
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
