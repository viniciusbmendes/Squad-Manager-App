import { createContext, Dispatch, SetStateAction } from 'react';
import { PlayerType } from '../types/PlayerType';


interface PlayersContextType {
  players: PlayerType[];
  setPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}
const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export default PlayersContext;