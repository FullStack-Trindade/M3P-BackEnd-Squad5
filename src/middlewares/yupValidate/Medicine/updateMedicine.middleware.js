const yup = require("yup");

const medicineTypes = [
  "capsule",
  "pill",
  "liquid",
  "cream",
  "gel",
  "inhalation",
  "injection",
  "spray",
];

const unit = ["mg", "mcg", "g", "ml", "%"];

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      name: yup
        .string("Campo nome do medicamento deve ser uma string")
        .min(5, "Campo nome do medicamento deve conter no mínimo 5 caracteres")
        .max(
          100,
          "Campo nome do medicamento deve conter no máximo 100 caracteres"
        )
        .required("Campo nome do medicamento é obrigatório"),
      date: yup
        .date("Campo de data tem que ser uma data válida")
        .required("Campo de data é obrigatório"),
      time: yup
        .string("Campo de tempo tem que ser uma string")
        .required("Campo de tempo é obrigatório"),
      medicineType: yup
        .string("Campo tipo de medicamento deve ser uma string")
        .oneOf(
          medicineTypes,
          "Campo tipo de medicamento deve ser um dos seguintes valores: " +
            medicineTypes
        )
        .required("Campo tipo de medicamento é obrigatório"),
      amount: yup
        .number("O campo de quantidade é um número com pelo menos duas casas após a vírgula")
        .test(
          'is-decimal',
          'O número deve ter pelo menos duas casas após a vírgula',
          (value) => (value === undefined || value === null) || /^\d+(\.\d{2,})?$/.test(value.toString()))
        .required("Campo de quantidade é obrigatório"),
      unit: yup
        .string("Campo unidade deve ser uma string")
        .oneOf(unit, "O campo unidade deve ser um dos seguintes valores: " + unit)
        .required("Campo unidade é obrigatório"),
      comments: yup
        .string("Campo observações deve ser uma string")
        .min(10, "Campo observações deve conter no mínimo 10 caracteres")
        .max(1000, "Campo observações deve conter no máximo 1000 caracteres")
        .required("Campo observações é obrigatório"),
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