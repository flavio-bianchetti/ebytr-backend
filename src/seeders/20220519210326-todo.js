'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('todos', [{
      user_id: 1,
      description: 'Minha primeira tarefa',
      // solução adaptada do site:
      // https://www.instagram.com/p/CdqTMAHP-nq/
      date: new Date().toLocaleString(
        'pt-BR',
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        },
      ),
      status: 'inProgress',
    }, {
      user_id: 1,
      description: 'Minha segunda tarefa',
      date: new Date().toLocaleString(
        'pt-BR',
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        },
      ),
      status: 'pending',
    }, {
      user_id: 1,
      description: 'Minha terceira tarefa',
      date: new Date().toLocaleString(
        'pt-BR',
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        },
      ),
      status: 'finished',
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  },
};
