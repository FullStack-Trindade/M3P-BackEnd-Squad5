'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [5, 100]
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dietType: {
        type: Sequelize.ENUM("low carb", "dash", "paleolithic", "ketogenic", "dukan", "mediterranean", "other"),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      systemStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
    await queryInterface.dropTable('Diets');
  }
};