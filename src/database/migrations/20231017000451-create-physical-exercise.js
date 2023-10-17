"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PhysicalExercise", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exerciseName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [5, 100],
        },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      exerciseType: {
        type: Sequelize.ENUM(
          "aerobic endurance",
          "muscular endurance",
          "flexibility",
          "strength",
          "agility",
          "other"
        ),
        allowNull: false,
      },
      quantityPerWeek: {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [10, 1000],
        },
      },
      systemStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PhysicalExercise");
  },
};
