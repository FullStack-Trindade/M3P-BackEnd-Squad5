const Diet = require("../../../database/models/diet.model");

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
