import { IPlayer } from './IPlayer';

export interface IPlayerModel {
  getAllPlayers(): Promise<IPlayer[]>;
  addPlayer(player: IPlayer): Promise<IPlayer>;
  // getPlayerById(id: number): Promise<IPlayer | null>;
  // updatePlayer(id: string, player: IPlayer): Promise<IPlayer | null>;
  // deletePlayer(id: string): Promise<boolean>;
}