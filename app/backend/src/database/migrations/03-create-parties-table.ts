import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IParty } from '../../interfaces/parties/IParty';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IParty>>('parties', {
      party_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      party_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      squad_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'squads',
          key: 'squad_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('parties');
  },
}