import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IPlayer } from '../../interfaces/players/IPlayer';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IPlayer>>('players', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      missedWars: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('players');
  }
}