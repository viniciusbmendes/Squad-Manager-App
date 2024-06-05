import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import db from '.'
import SequelizeParty from './PartyModel';

class SequelizeSquad extends Model<InferAttributes<SequelizeSquad>, InferCreationAttributes<SequelizeSquad>> {
  declare squad_id: CreationOptional<number>;
  declare squad_name: string;
}

SequelizeSquad.init({
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
}, {
  sequelize: db,
  tableName: 'squads',
  timestamps: false,
});

SequelizeSquad.hasMany(SequelizeParty, {as: 'parties', foreignKey: 'squad_id'});
SequelizeParty.belongsTo(SequelizeSquad, {as: 'squad', foreignKey: 'squad_id'});

export default SequelizeSquad;