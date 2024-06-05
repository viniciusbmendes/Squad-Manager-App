import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import db from '.'
import SequelizePlayer from './PlayerModel';
import SequelizePlayersParty from './PlayersPartyModel';

class SequelizeParty extends Model<InferAttributes<SequelizeParty>, InferCreationAttributes<SequelizeParty>> {
  declare party_id: CreationOptional<number>;
  declare party_name: string;
  declare squad_id: number;
}

SequelizeParty.init({
  party_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  party_name: {
    type: DataTypes.STRING,
    allowNull: false,
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
}, {
  sequelize: db,
  tableName: 'parties',
  timestamps: false,
});

SequelizeParty.belongsToMany(SequelizePlayer, {through: SequelizePlayersParty, foreignKey: 'party_id', as: 'players'});
SequelizePlayer.belongsToMany(SequelizeParty, {through: SequelizePlayersParty, foreignKey: 'player_id', as: 'parties'});

export default SequelizeParty;