'use strict';

const faker = require ('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let date = new Date();
    return queryInterface.bulkInsert('Articles',[
      {
        Nom: "Casquette",
        Description: "casquette tsarabe no sady mora",
        Image: 'http://coderaweso.me/image',
        Prix: '20000ar',
        Stock_global: '80000',
        Quantite:50,
        createAt:date,
        updatedAt:date
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
   
  }
};
