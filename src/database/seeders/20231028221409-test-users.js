'use strict';

const { Password } = require("../../services");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users", [
      {
        fullName: "Admin User",
        gender: "male",
        email: "admin@email.com",
        cpf: "12345678910",
        phoneNumber: "489999999999",
        type: "admin",
        password: await Password.encrypt("password"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "Medic User",
        gender: "female",
        email: "medic@email.com",
        cpf: "12345678911",
        phoneNumber: "489999999998",
        type: "medic",
        password: await Password.encrypt("password"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "Nurse User",
        gender: "male",
        email: "nurse@email.com",
        cpf: "12345678912",
        phoneNumber: "489999999997",
        type: "nurse",
        password: await Password.encrypt("password"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
  }
};
