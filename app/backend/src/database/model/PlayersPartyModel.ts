import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import db from '.'


class SequelizePlayersParty extends Model<InferAttributes<SequelizePlayersParty>, InferCreationAttributes<SequelizePlayersParty>> {
  declare player_id: number;
  declare party_id: number;
}

SequelizePlayersParty.init({
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'players',
      key: 'player_id',
    },
  },
  party_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'parties',
      key: 'party_id',
    },
  },
}, {
  sequelize: db,
  tableName: 'players_pt',
  timestamps: false,
});

export default SequelizePlayersParty;