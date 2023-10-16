"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Medicines", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
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
      medicineType: {
        type: Sequelize.ENUM(
          "capsule",
          "pill",
          "liquid",
          "cream",
          "gel",
          "inhalation",
          "injection",
          "spray"
        ),
        allowNull: false,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      unit: {
        type: Sequelize.ENUM("mg", "mcg", "g", "ml", "%"),
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
          len: [10, 1000],
        },
      },
      systemStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable("Medicines");
  },
};
