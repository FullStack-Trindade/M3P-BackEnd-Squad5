const Exam = require("../../../database/models/exam.model");
const { log } = require("../../../services/logger");

module.exports.findAllExam = async (req, res) => {
  try {
    const {
      params: { id },
      query: { patientId },
    } = req;
    if ((patientId && isNaN(patientId)) || (id && isNaN(id))) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    if (id) {
      const exam = await Exam.findByPk(id);
      if (!exam) {
        const err = new Error("Exame não encontrado");
        return res.status(400).send(` message: ${err} `);
      }
      await log(
        res.locals.currentUser,
        `a consulta ${id}`,
        req,
        exam.patientId
      );
      return res.status(200).send({ data: exam });
    }
    const exam = patientId
      ? await Exam.findAll({ where: { patientId: patientId } })
      : await Exam.findAll();
    await log(res.locals.currentUser, `os exames ${id}`, req, patientId);
    return res.status(200).send({ data: exam });
  } catch (err) {
    return res.status(err.status || 500).send({ err: err.message });
  }
};
