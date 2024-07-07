import { IPlayerModel } from '../interfaces/players/IPlayerModel';
import SequelizePlayer from '../database/model/PlayerModel';
import { IPlayer } from '../interfaces/players/IPlayer';

export default class PlayersModel implements IPlayerModel {
  private model = SequelizePlayer;

  async getAllPlayers() {
    const players = await this.model.findAll();
    return players;
  }

  async addPlayer(player: IPlayer) {
    const newPlayer = await this.model.create(player);
    return newPlayer;
  }
}