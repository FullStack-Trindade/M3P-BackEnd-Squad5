const ConfigTheme = require("../../../database/models/configTheme.model");
const { log } = require("../../../services/logger");

module.exports.updateTheme = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor,
        companyName,
        slogan,
        logo,
        userId,
      },
    } = req;
    if (id && isNaN(id)) {
      const err = new Error("Id deve ser um INTEGER");
      err.status = 400;
      throw err;
    }
    const [configTheme] = await ConfigTheme.update(
      {
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor,
        companyName,
        slogan,
        logo,
        userId,
      },
      { where: { id } }
    );

    if (configTheme == 0) {
      return res.status(400).send({ message: "Tema não encontrado" });
    } else {
      await log(res.locals.currentUser, `o Tema ${id}`, req, userId);
      return res.status(200).send({ message: "Tema atualizado com sucesso" });
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
