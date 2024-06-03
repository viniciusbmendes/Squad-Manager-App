import { QueryInterface } from 'sequelize';

export default {
  up: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkInsert('players', [
      {
        nickname: 'johndoe',
        class: 'mage',
      },
      {
        nickname: 'janedoe',
        class: 'warrior',
      },
      {
        nickname: 'marydoe',
        class: 'priest',
      },
    ], {});
  },
  down: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkDelete('players', {});
  },
};