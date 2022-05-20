'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
       name: 'Administrador',
       email: 'admin@admin.com',
       password: '$2a$10$p.57XelJo6XJMCnFLABNp.7yYHFe.tCA/L6pLdy78Zp4DX3Dw4YLy',
     }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
