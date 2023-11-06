"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ConfigThemes", [
      {
        primaryColor: "#66CDAA",
        secondaryColor: "#AFEEEE",
        primaryTextColor: "#00BFFF",
        secondaryTextColor: "#4169E1",
        companyName: "Garcia Care",
        slogan: "Saude Graciosa",
        logo: "https://a.imagem.app/oxM0yy.png",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ConfigThemes", null, {});
  },
};
