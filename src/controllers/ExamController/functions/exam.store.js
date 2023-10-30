const Exam = require("../../../database/models/exam.model");
const {log} = require("../../../services/logger");

module.exports.createNewExam = async (req, res) => {
  try {
    const {
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
        systemStatus = true,
      },
    } = req;
    await Exam.create({
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
    });
    await log(res.locals.currentUser, `o exame ${name}`, req, patientId);
    return res.status(201).send({ message: "Exame criado com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
