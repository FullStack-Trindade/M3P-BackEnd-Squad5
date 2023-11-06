const Exam = require("../../../database/models/exam.model");
const { log } = require("../../../services/logger");

module.exports.deleteExam = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do exame deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const exam = await Exam.destroy({
      where: {
        id: id,
      },
    });

    if (exam == 0) {
      return res
        .status(400)
        .send({ message: `Nenhum exame localizado pelo id: ${id}` });
    } else {
      await log(res.locals.currentUser, `o exame ${id}`, req);
      return res
        .status(200)
        .send({ message: "Exame foi deletado com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
