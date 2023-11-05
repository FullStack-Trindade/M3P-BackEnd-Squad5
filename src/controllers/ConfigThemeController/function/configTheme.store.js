const ConfigTheme = require("../../../database/models/configTheme.model");
const { log } = require("../../../services/logger");

module.exports.createNewTheme = async (req, res) => {
  try {
    const {
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
    await ConfigTheme.create({
      primaryColor,
      secondaryColor,
      primaryTextColor,
      secondaryTextColor,
      companyName,
      slogan,
      logo,
      userId,
    });

    await log(res.locals.currentUser, `o tema da ${companyName}`, req, userId);
    return res.status(201).send({ message: "Tema criado com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
