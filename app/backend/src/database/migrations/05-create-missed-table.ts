import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMissedWars } from '../../interfaces/missed_wars/IMissedWars';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMissedWars>>('missed_wars', {
      missed_war_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'players',
          key: 'player_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('missed_wars');
  },
}