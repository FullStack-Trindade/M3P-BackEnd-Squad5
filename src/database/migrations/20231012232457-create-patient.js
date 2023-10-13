'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 20
        }
      },
      civilStatus: {
        type: Sequelize.ENUM("single", "married", "divorced", "widowed", "separated"),
        allowNull: false
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [8, 64]
        }
      },
      emergencyContact: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: 12,
          is: /^[0-9]*$/
        }        
      },
      listOfAllergies: {
        type: Sequelize.STRING,
        allowNull: true
      },
      specificCare: {
        type: Sequelize.STRING,
        allowNull: true
      },
      healthInsurance: {
        type: Sequelize.STRING,
        allowNull: true
      },
      insuranceNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]*$/
        }   
      },
      insuranceExpirationDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};