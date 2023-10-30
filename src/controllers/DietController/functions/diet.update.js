const Diet = require("../../../database/models/diet.model");
const {log} = require("../../../services/logger");

module.exports.updateDiet = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        name,
        date,
        time,
        dietType,
        description,
        systemStatus,
        patientId,
        userId,
      },
    } = req;
    if (id && isNaN(id)) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    const [diet] = await Diet.update(
      {
        name,
        date,
        time,
        dietType,
        description,
        systemStatus,
        patientId,
        userId,
      },
      { where: { id } }
    );

    if (diet == 0) {
      return res.status(400).send({ message: "Consulta não encontrado" });
    } else {
      await log(res.locals.currentUser, `a dieta ${id}`, req, patientId);
      return res
        .status(200)
        .send({ message: "Consulta atualizada com sucesso" });
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
