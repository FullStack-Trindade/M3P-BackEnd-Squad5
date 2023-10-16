"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Exams", {
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
          len: [8, 64],
        },
      },
      examDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      examTime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      examType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [4, 32],
        },
      },
      laboratory: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [4, 32],
        },
      },
      documentURL: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      results: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [16, 1024],
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
    await queryInterface.dropTable("Exams");
  },
};
