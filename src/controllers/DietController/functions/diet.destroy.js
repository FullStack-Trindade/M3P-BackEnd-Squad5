const Diet = require("../../../database/models/diet.model");
const {log} = require("../../../services/logger");

module.exports.deleteDiet = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id da dieta deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const diet = await Diet.destroy({
      where: {
        id: id,
      },
    });

    if (diet == 0) {
      return res
        .status(400)
        .send({ message: `Nenhuma dieta localizada pelo id: ${id}` });
    } else {
      await log(res.locals.currentUser, `a dieta ${id}`, req);
      return res
        .status(200)
        .send({ message: "Dieta foi deletado com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
