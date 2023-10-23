'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Medicines", "time", {
      allowNull: false,
      type: Sequelize.TIME
    });

    await queryInterface.changeColumn("Medicines", "date", {
      allowNull: false,
      type: Sequelize.DATEONLY
    });

    await queryInterface.addColumn("Diets", "time", {
      allowNull: false,
      type: Sequelize.TIME
    });

    await queryInterface.changeColumn("Diets", "date", {
      allowNull: false,
      type: Sequelize.DATEONLY
    });

    await queryInterface.changeColumn("PhysicalExercise", "date", {
      allowNull: false,
      type: Sequelize.DATEONLY
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn("Medicines", "time");
    
    await queryInterface.changeColumn("Medicines", "date", {
      allowNull: false,
      type: Sequelize.DATE
    });

    queryInterface.removeColumn("Diets", "time");
    
    await queryInterface.changeColumn("Diets", "date", {
      allowNull: false,
      type: Sequelize.DATE
    });

    await queryInterface.changeColumn("PhysicalExercise", "date", {
      allowNull: false,
      type: Sequelize.DATE
    });
  }
};
