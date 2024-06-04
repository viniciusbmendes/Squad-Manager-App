import { InferAttributes, Model, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import db from '.'

class SequelizePlayer extends Model<InferAttributes<SequelizePlayer>, InferCreationAttributes<SequelizePlayer>> {
  declare id: CreationOptional<number>;
  declare nickname: string;
  declare class: string;
  declare missedWars: CreationOptional<number>;
}

SequelizePlayer.init({
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  missedWars: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: true,
  },
}, {
  sequelize: db,
  tableName: 'players',
  timestamps: false,
});

export default SequelizePlayer;