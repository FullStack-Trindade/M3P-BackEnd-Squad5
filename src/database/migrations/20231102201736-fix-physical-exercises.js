'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.renameTable("PhysicalExercise", "PhysicalExercises")
      .then(() => queryInterface.changeColumn("PhysicalExercises", "quantityPerWeek", {
        type: Sequelize.DECIMAL,
        allowNull: false
      }));
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.renameTable("PhysicalExercises", "PhysicalExercise")
      .then(() => queryInterface.changeColumn("PhysicalExercises", "quantityPerWeek", {
        type: Sequelize.DECIMAL(2, 2),
        allowNull: false
      }));
  }
};
