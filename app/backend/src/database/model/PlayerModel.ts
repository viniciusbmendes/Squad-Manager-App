import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import db from '.'
import SequelizeParty from './PartyModel';
import SequelizeMissedWar from './MissedWarsModel';

class SequelizePlayer extends Model<InferAttributes<SequelizePlayer>, InferCreationAttributes<SequelizePlayer>> {
  declare player_id: CreationOptional<number>;
  declare nickname: string;
  declare class: string;
}

SequelizePlayer.init({
  player_id: {
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'players',
  timestamps: false,
});

SequelizePlayer.hasMany(SequelizeMissedWar, {as: 'missed_wars', foreignKey: 'player_id'});
SequelizeMissedWar.belongsTo(SequelizePlayer, {as: 'player', foreignKey: 'player_id'});

export default SequelizePlayer;