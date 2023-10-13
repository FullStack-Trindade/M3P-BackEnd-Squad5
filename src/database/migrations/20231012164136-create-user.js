"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(64),
        validate: {
          len: [8, 64],
        },
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("male", "female", "other"),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        },
        unique: true,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING(14),
        validate: {
          len: 11,
          is: /^[0-9]*$/,
        },
        unique: true,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: 12,
          is: /^[0-9]*$/,
        },
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM("admin", "patient", "medic", "nurse"),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      systemStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("Users");
  },
};
