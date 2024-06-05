import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IPlayerPt } from '../../interfaces/players_pt/IPlayersPts';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IPlayerPt>>('players_pt', {
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'players',
          key: 'player_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      party_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'parties',
          key: 'party_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('players_pt');
  },
}