"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Patients", {
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
          is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        },
        unique: true,
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 20,
        },
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING(14),
        validate: {
          len: 14,
          is: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        },
        unique: true,
      },
      civilStatus: {
        type: Sequelize.ENUM(
          "single",
          "married",
          "divorced",
          "widowed",
          "separated"
        ),
        allowNull: false,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: 12,
          is: /^[0-9]*$/,
        },
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [8, 64],
        },
      },
      emergencyContact: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: 12,
          is: /^[0-9]*$/,
        },
      },
      listOfAllergies: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      specificCare: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      healthInsurance: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      insuranceNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]*$/,
        },
      },
      insuranceExpirationDate: {
        type: Sequelize.STRING,
        allowNull: true,
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
      addressId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Addresses",
          key: "id",
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
    await queryInterface.dropTable("Patients");
  },
};
