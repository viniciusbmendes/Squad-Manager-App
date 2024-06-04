import {Request, Response} from 'express';
import PlayersService from '../services/PlayersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class PlayersController {
  constructor(private playersService: PlayersService = new PlayersService()) {}

  public async getAllPlayers(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.playersService.getAllPlayers();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}