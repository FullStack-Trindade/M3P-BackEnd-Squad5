const Medicine  = require("../../../database/models/medicine.model");

module.exports.createNewMedicine = async (req, res) => {
    try {
      const {
        body: {
          name,
          date,
          time,
          medicineType,
          amount,
          unit,
          comments,
          systemStatus = true,
          patientId,
          userId
        },
      } = req;
  
      await Medicine.create({
        name,
        date,
        time,
        medicineType,
        amount,
        unit,
        comments,
        systemStatus,
        patientId,
        userId
      });
  
      return res.status(201).send({ message: "Medicamento criado com sucesso" });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(400).send({ message: error.message });
      }
      return res
        .status(error.code || error.status || 500)
        .send({ message: error.message });
    }
  };
  