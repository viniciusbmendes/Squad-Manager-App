import { IPlayerModel } from '../interfaces/players/IPlayerModel';
import SequelizePlayer from '../database/model/PlayerModel';

export default class PlayersModel implements IPlayerModel {
  private model = SequelizePlayer;

  async getAllPlayers() {
    const players = await this.model.findAll();
    return players;
  }
}