'use strict';

  const Address = require("../models/address.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.insert(null, "Addresses", {
      id: 1,
      zipCode: "12345678",
      city: "Florianópolis",
      state: "Santa Catarina",
      street: "Rua 1",
      number: 1234,
      complement: "casa",
      neighborhood: "Bairro 1",
      referencePoint: "ponto 1",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(() => queryInterface.bulkInsert("Patients", [{
      id: 1,
      fullName: "Paciente 1",
      gender: "male",
      birthday: "01-01-2000",
      cpf: "123.456.789-10",
      rg: "12345678910",
      civilStatus: "single",
      phoneNumber: "1234567891011",
      email: "patient1@email.com",
      nationality: "brasileiro",
      emergencyContact: "1234567891011",
      listOfAllergies: "",
      specificCare: "",
      healthInsurance: "unimed",
      insuranceNumber: "1234",
      insuranceExpirationDate: "2025-07-07",
      userId: 1,
      addressId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]));
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Patients", null, {})
      .then(() => queryInterface.bulkDelete("Addresses", null, {}));
  }
};
