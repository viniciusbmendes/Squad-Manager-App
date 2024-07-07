import {Request, Response} from 'express';
import PlayersService from '../services/PlayersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class PlayersController {
  constructor(private playersService: PlayersService = new PlayersService()) {}

  public async getAllPlayers(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.playersService.getAllPlayers();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async addPlayer(req: Request, res: Response): Promise<Response> {
    const player = req.body;
    const { status, data } = await this.playersService.addPlayer(player);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}