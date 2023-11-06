const Medicine = require("../../../database/models/medicine.model");
const {log} = require("../../../services/logger");

module.exports.deleteMedicine = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do medicamento deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const medicine = await Medicine.destroy({
      where: {
        id: id,
      },
    });

    if (medicine == 0) {
      return res
        .status(400)
        .send({ message: `Nenhum medicamento localizado pelo id: ${id}` });
    } else {
      await log(res.locals.currentUser, `o medicamento ${id}`, req);
      return res
        .status(202)
        .send({ message: "Medicamento excluído com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
