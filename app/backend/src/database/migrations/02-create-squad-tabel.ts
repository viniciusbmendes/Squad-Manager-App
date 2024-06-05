import { Model, QueryInterface, DataTypes } from 'sequelize';
import { ISquad } from '../../interfaces/squads/ISquad';

export default {
  up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ISquad>>('squads', {
      squad_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      squad_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },
  down (queryInterface: QueryInterface) {
    return queryInterface.dropTable('squads');
  },
}