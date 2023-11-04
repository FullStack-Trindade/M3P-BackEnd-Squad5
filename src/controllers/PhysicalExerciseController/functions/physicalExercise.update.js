const PhysicalExercise = require("../../../database/models/physicalExercise.model");
const { log } = require("../../../services/logger");

module.exports.updatePhysicalExercise = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        exerciseName,
        date,
        time,
        exerciseType,
        quantityPerWeek,
        description,
        systemStatus,
        patientId,
        userId,
      },
    } = req;

    const [exercise] = await PhysicalExercise.update(
      {
        exerciseName,
        date,
        time,
        exerciseType,
        quantityPerWeek,
        description,
        systemStatus,
        patientId,
        userId,
      },
      { where: { id } }
    );

    if (exercise == 0) {
      return res
        .status(400)
        .send({ message: "Exercicio físico não encontrado" });
    } else {
      await log(
        res.locals.currentUser,
        `o exercicio físico ${exerciseName}`,
        req,
        patientId
      );
      return res
        .status(200)
        .send({ message: "Exercicio físico atualizado com sucesso" });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
