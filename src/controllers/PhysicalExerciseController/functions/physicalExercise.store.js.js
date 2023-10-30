const PhysicalExercise = require("../../../database/models/physicalExercise.model");
const { log } = require("../../../services/logger");

module.exports.createNewPhysicalExercise = async (req, res) => {
  try {
    const {
      body: {
        exerciseName,
        date,
        time,
        exerciseType,
        quantityPerWeek,
        description,
        systemStatus = true,
        patientId,
        userId,
      },
    } = req;

    await PhysicalExercise.create({
      exerciseName,
      date,
      time,
      exerciseType,
      quantityPerWeek,
      description,
      systemStatus,
      patientId,
      userId,
    });

    await log(
      res.locals.currentUser,
      `o exercicio ${exerciseName}`,
      req,
      patientId
    );
    return res
      .status(201)
      .send({ message: "Exercicio físico foi cadastrado com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
