const Diet = require("../../../database/models/diet.model");

module.exports.createNewDiet = async (req, res) => {
  try {
    const {
      body: {
        name,
        date,
        time,
        dietType,
        description,
        systemStatus = true,
        patientId,
        userId,
      },
    } = req;
    await Diet.create({
      name,
      date,
      time,
      dietType,
      description,
      systemStatus,
      patientId,
      userId,
    });

    return res.status(201).send({ message: "Dieta criada com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
