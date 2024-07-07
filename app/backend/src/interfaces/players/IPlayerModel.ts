import SequelizePlayer from '../../database/model/PlayerModel';
import { IPlayer } from './IPlayer';

export interface IPlayerModel {
  getAllPlayers(): Promise<IPlayer[]>;
  addPlayer(player: IPlayer): Promise<IPlayer>;
  deletePlayer(id: number): Promise<void>;
  updatePlayer(id: number, player: IPlayer): Promise<SequelizePlayer>;
  // getPlayerById(id: number): Promise<IPlayer | null>;
}