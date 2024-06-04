import { IPlayer } from './IPlayer';

export interface IPlayerModel {
  getAllPlayers(): Promise<IPlayer[]>;
  // getPlayerById(id: number): Promise<IPlayer | null>;
  // createPlayer(player: IPlayer): Promise<IPlayer>;
  // updatePlayer(id: string, player: IPlayer): Promise<IPlayer | null>;
  // deletePlayer(id: string): Promise<boolean>;
}