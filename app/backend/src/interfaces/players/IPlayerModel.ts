import { IPlayer } from './IPlayer';

export interface IPlayerModel {
  getAllPlayers(): Promise<IPlayer[]>;
  addPlayer(player: IPlayer): Promise<IPlayer>;
  deletePlayer(id: number): Promise<void>;
  // getPlayerById(id: number): Promise<IPlayer | null>;
  // updatePlayer(id: string, player: IPlayer): Promise<IPlayer | null>;
}