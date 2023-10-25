const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      name: yup
        .string("Campo nome da dieta deve ser uma string")
        .min(5, "Camponome da dieta deve conter no mínimo 5 caracteres")
        .max(100, "Campo nome da dieta deve conter no máximo 100 caracteres")
        .required("Campo nome da dieta é obrigatório"),
      date: yup
        .date("Campo de data tem que ser uma data valida")
        .required("Campo de data é obrigatório"),
      time: yup
        .string("Campo de tempo tem que ser uma string")
        .required("Campo de tempo é obrigatório"),
      dietType: yup
        .mixed()
        .oneOf(
          [
            "low carb",
            "dash",
            "paleolithic",
            "ketogenic",
            "dukan",
            "mediterranean",
            "other",
          ],
          "Campo tipo deve possuir um dos seguintes valores: low carb,dash,paleolithic,ketogenic,dukan,mediterranean,other"
        ),
      description: yup
        .string("Campo de descrição  deve ser uma string")
        .min(16, "Campo de descrição  deve conter no mínimo 16 caracteres")
        .max(1024, "Campo de descrição deve conter no máximo 1024 caracteres")
        .required("Campo de descrição é obrigatório"),
      patientId: yup
        .number()
        .integer()
        .positive()
        .required("Id do Paciente e obrigatório"),
      userId: yup
        .number()
        .integer()
        .positive()
        .required("Id do Usuario e obrigatório"),
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
