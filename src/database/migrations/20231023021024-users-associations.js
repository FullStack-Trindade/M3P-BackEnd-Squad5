"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Diets", "userId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId",
      },
    });

    await queryInterface.addColumn("Exams", "userId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId",
      },
    });

    await queryInterface.addColumn("Medicines", "userId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId",
      },
    });

    await queryInterface.addColumn("PhysicalExercise", "userId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId",
      },
    });

    await queryInterface.addColumn("Addresses", "userId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
        as: "userId",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Diets", "userId");
    await queryInterface.removeColumn("Exams", "userId");
    await queryInterface.removeColumn("Medicines", "userId");
    await queryInterface.removeColumn("PhysicalExercise", "userId");
    await queryInterface.removeColumn("Addresses", "userId");
  },
};
