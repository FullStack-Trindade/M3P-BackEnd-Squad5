const Medicine = require("../../../database/models/medicine.model");

module.exports.updateMedicine = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        name,
        date,
        time,
        medicineType,
        amount,
        unit,
        comments,
        systemStatus,
        patientId,
        userId,
      },
    } = req;

    const [medicine] = await Medicine.update(
      {
        name,
        date,
        time,
        medicineType,
        amount,
        unit,
        comments,
        systemStatus,
        patientId,
        userId,
      },
      { where: { id } }
    );

    if (medicine == 0) {
      return res.status(400).send({ message: "Medicamento não encontrado" });
    } else {
      return res
        .status(200)
        .send({ message: "Medicamento atualizado com sucesso" });
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
