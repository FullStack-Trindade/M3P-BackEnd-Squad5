'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Appointments", [{
      id: 1,
      userId: 2,
      patientId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      appointmentReason: "Razão 1",
      appointmentDate: "2023-11-30",
      appointmentTime: "22:50",
      description: "desc appointmnet 1",
      prescriptionMedication: "med 1",
      dosagePrecautions: "prec 1",
    }]).then(() => queryInterface.bulkInsert("Diets", [{
      id: 1,
      userId: 2,
      patientId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "Diet 1",
      date: "2023-11-30",
      time: "22:50",
      dietType: "low carb",
      description: "desc diet 1"
    }])).then(() => queryInterface.bulkInsert("Exams", [{
      id: 1,
      userId: 2,
      patientId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "Exam 1",
      examDate: "2023-11-30",
      examTime: "22:50",
      examType: "Exam type 1",
      laboratory: "Lab 1",
      documentURL: "https://random.link.com",
      results: "Results 1",
    }])).then(() => queryInterface.bulkInsert("Medicines", [{
      id: 1,
      userId: 2,
      patientId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "Medicine 1",
      date: "2023-11-30",
      time: "22:50",
      medicineType: "capsule",
      amount: 0.55,
      unit: "g",
      comments: "comment  blah",
      systemStatus: true
    }])).then(() => queryInterface.bulkInsert("PhysicalExercises", [{
      id: 1,
      userId: 2,
      patientId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      exerciseName: "Exercise 1",
      date: "2023-11-30",
      time: "22:50",
      exerciseType: "muscular endurance",
      quantityPerWeek: 3,
      description: "Exercise desc 1",
    }]));
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Appointments",  null, {})
      .then(() => queryInterface.bulkDelete("Diets",null, {}))
      .then(() => queryInterface.bulkDelete("Exams",null, {}))
      .then(() => queryInterface.bulkDelete("Medicines",null, {}))
      .then(() => queryInterface.bulkDelete("PhysicalExercises",null, {}))
  }
};
