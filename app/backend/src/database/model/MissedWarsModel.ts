import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import db from '.'

class SequelizeMissedWar extends Model<InferAttributes<SequelizeMissedWar>, InferCreationAttributes<SequelizeMissedWar>> {
  declare missed_war_id: CreationOptional<number>;
  declare player_id: number;
  declare date: Date;
}

SequelizeMissedWar.init({
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
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'missed_wars',
  timestamps: false,
});

export default SequelizeMissedWar;
