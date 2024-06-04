import { IPlayerModel } from "../interfaces/players/IPlayerModel";
import PlayersModel from '../models/PlayersModel';
import { IPlayer } from '../interfaces/players/IPlayer';

export default class PlayersService {
  constructor(private playersModel: IPlayerModel = new PlayersModel()) { }

  public async getAllPlayers(): Promise<{ status: string, data: IPlayer[] | { message: string } }>{
    try {
      const players = await this.playersModel.getAllPlayers();
      return { status: 'SUCCESSFUL', data: players };
    } catch (error: any) {
      if (error instanceof Error) {
        return { status: 'ERROR', data: { message: error.message } };
      }
      return { status: 'ERROR', data: { message: 'Internal server error' } };
    }
  }
}