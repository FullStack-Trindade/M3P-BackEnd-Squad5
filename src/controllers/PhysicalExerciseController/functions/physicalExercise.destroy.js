const PhysicalExercise = require("../../../database/models/physicalExercise.model");
const { log } = require("../../../services/logger");

module.exports.deletePhysicalExercise = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do exercicio deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const exercise = await PhysicalExercise.destroy({
      where: {
        id: id,
      },
    });

    if (exercise == 0) {
      return res
        .status(400)
        .send({ message: `Nenhum exercicio físico localizado pelo id: ${id}` });
    } else {
      await log(res.locals.currentUser, `o exercicio físico ${id}`, req);
      return res
        .status(202)
        .send({ message: "Exercicio físico  excluído com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
