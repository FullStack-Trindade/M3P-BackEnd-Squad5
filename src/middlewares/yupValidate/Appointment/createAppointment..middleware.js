const yup = require("yup");

module.exports.validateData = async (req, res, next) => {
  try {
    const schema = yup.object().shape({
      appointmentReason: yup
        .string("Campo motivo da consulta deve ser uma string")
        .min(8, "Campo motivo da consulta deve conter no mínimo 8 caracteres")
        .max(64, "Campo motivo da consulta deve conter no máximo 64 caracteres")
        .required("Campo motivo da consulta é obrigatório"),
      appointmentDate: yup
        .date("Campo de data tem que ser uma data valida")
        .required("Campo de data é obrigatório"),
      appointmentTime: yup
        .string("Campo de tempo tem que ser uma string")
        .required("Campo de tempo é obrigatório"),
      description: yup
        .string("Campo de descrição  deve ser uma string")
        .min(16, "Campo de descrição  deve conter no mínimo 16 caracteres")
        .max(1024, "Campo de descrição deve conter no máximo 1024 caracteres")
        .required("Campo de descrição é obrigatório"),
      prescriptionMedication: yup
        .string("Campo de medicação receitada precisa ser uma string")
        .required("Campo de medicação receitada é obrigatório"),
      dosagePrecautions: yup
        .string("Campo de dosagem e precauções precisa ser uma string")
        .min(
          16,
          "Campo de dosagem e precauções  deve conter no mínimo 16 caracteres"
        )
        .max(
          256,
          "Campo de dosagem e precauções  deve conter no máximo 256 caracteres"
        )
        .required("Campo de dosagem e precauções é obrigatório"),
      patientId: yup
        .number()
        .integer()
        .positive()
        .required("Id do Paciente e obrigatório"),
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
