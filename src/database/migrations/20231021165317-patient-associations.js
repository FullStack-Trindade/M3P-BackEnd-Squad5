"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Appointments", "patientId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Patients",
        key: "id",
        as: "patientId",
      },
    });

    await queryInterface.addColumn("Diets", "patientId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Patients",
        key: "id",
        as: "patientId",
      },
    });

    await queryInterface.addColumn("Exams", "patientId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Patients",
        key: "id",
        as: "patientId",
      },
    });

    await queryInterface.addColumn("Medicines", "patientId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Patients",
        key: "id",
        as: "patientId",
      },
    });

    await queryInterface.addColumn("PhysicalExercise", "patientId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Patients",
        key: "id",
        as: "patientId",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Appointments", "patientId");
    await queryInterface.removeColumn("Diets", "patientId");
    await queryInterface.removeColumn("Exams", "patientId");
    await queryInterface.removeColumn("Medicines", "patientId");
    await queryInterface.removeColumn("PhysicalExercise", "patientId");
  },
};
