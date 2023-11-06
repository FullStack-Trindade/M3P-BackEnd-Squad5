"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appointments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      appointmentReason: {
        type: Sequelize.STRING(64),
        allowNull: false,
        validate: {
          len: [8, 64],
        },
      },
      appointmentDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      appointmentTime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1024),
        allowNull: false,
        validate: {
          len: [16, 1024],
        },
      },

      prescriptionMedication: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      dosagePrecautions: {
        type: Sequelize.STRING(256),
        allowNull: false,
        validate: {
          len: [16, 256],
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: true,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
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
    await queryInterface.dropTable("Appointments");
  },
};
