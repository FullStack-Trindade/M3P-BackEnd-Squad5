"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Patients", "fullName", {
      allowNull: false,
      type: Sequelize.STRING(64),
      validate: {
        len: [8, 64],
      },
    });

    await queryInterface.addColumn("Patients", "gender", {
      allowNull: false,
      type: Sequelize.ENUM("male", "female", "other"),
    });

    await queryInterface.addColumn("Patients", "email", {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      },
      unique: true,
    });

    await queryInterface.addColumn("Patients", "cpf", {
      allowNull: false,
      type: Sequelize.STRING(14),
      validate: {
        len: 14,
        is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      },
      unique: true,
    });

    await queryInterface.addColumn("Patients", "phoneNumber", {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        len: 12,
        is: /^[0-9]*$/,
      },
    });

    await queryInterface.addColumn("Patients", "systemStatus", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    });

    await queryInterface.addColumn("Addresses", "id", {
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    });

    await queryInterface.removeColumn("Addresses", "patientId");

    await queryInterface.addColumn("Patients", "addressId", {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Addresses",
        key: "id",
        as: "addressId",
      },
    });

    // await queryInterface.removeColumn("Patients", "userId");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Patients", "fullName");
    await queryInterface.removeColumn("Patients", "gender");
    await queryInterface.removeColumn("Patients", "email");
    await queryInterface.removeColumn("Patients", "cpf");
    await queryInterface.removeColumn("Patients", "phoneNumber");
    await queryInterface.removeColumn("Patients", "systemStatus");
    await queryInterface.removeColumn("Addresses", "id");
    await queryInterface.addColumn("Patients", "patientId", {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      references: {
        model: "Patients",
        key: "id",
        as: "patientId",
      },
    });
    await queryInterface.removeColumn("Patients", "addressId");

    // await queryInterface.addColumn("Patients", "userId");
  },
};
