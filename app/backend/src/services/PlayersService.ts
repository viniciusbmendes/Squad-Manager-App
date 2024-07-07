import { IPlayerModel } from "../interfaces/players/IPlayerModel";
import PlayersModel from '../models/PlayersModel';
import { IPlayer } from '../interfaces/players/IPlayer';

export default class PlayersService {
  constructor(private playersModel: IPlayerModel = new PlayersModel()) { }

  public async getAllPlayers(): Promise<{ status: string, data: IPlayer[] | { message: string } }> {
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

  public async addPlayer(player: IPlayer): Promise<{ status: string, data: IPlayer | { message: string } }> {
    try {
      const newPlayer = await this.playersModel.addPlayer(player);
      return { status: 'CREATED', data: newPlayer };
    } catch (error: any) {
      if (error instanceof Error) {
        return { status: 'CONFLICT', data: { message: error.message } };
      }
      return { status: 'ERROR', data: { message: 'Internal server error' } };
    }
  }

  public async deletePlayer(id: number): Promise<{ status: string, data: { message: string } }> {
    try {
      await this.playersModel.deletePlayer(id);
      return { status: 'NO_CONTENT', data: { message: 'Player deleted' } };
    } catch (error: any) {
      if (error instanceof Error) {
        return { status: 'NOT_FOUND', data: { message: error.message } };
      }
      return { status: 'ERROR', data: { message: 'Internal server error' } };
    }
  }
}