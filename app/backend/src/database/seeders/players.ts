import { QueryInterface } from 'sequelize';
import { readCSV } from '../../utils/csvReader';

export default {
  up: async (QueryInterface: QueryInterface) => {
    try{
      const players = await readCSV('../../../data/Membros_Sugar.csv');
      console.log("LOG", players);
      await QueryInterface.bulkInsert('players', players);
    } catch (error) {
      console.error(error);
    }
  },
  down: async (QueryInterface: QueryInterface) => {
    await QueryInterface.bulkDelete('players', {});
  },
};