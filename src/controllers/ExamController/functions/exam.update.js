const Exam = require("../../../database/models/exam.model");
const { log } = require("../../../services/logger");

module.exports.updateExam = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        name,
        examDate,
        examTime,
        examType,
        laboratory,
        documentURL,
        results,
        patientId,
        userId,
        systemStatus,
      },
    } = req;
    if (id && isNaN(id)) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    const [exam] = await Exam.update(
      {
        name,
        examDate,
        examTime,
        examType,
        laboratory,
        documentURL,
        results,
        patientId,
        userId,
        systemStatus,
      },
      { where: { id } }
    );

    if (exam == 0) {
      return res.status(400).send({ message: "Exame não encontrado" });
    } else {
      await log(res.locals.currentUser, `o exame ${id}`, req, patientId);
      return res.status(200).send({ message: "Exame atualizado com sucesso" });
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
