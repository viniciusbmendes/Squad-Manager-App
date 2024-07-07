import { useState } from 'react';
import PlayersContext from './PlayersContext';
import { PlayerType } from '../types/PlayerType';

type PlayersProviderProps = {
  children: React.ReactNode;
}

function PlayersProvider({ children }: PlayersProviderProps) {
	const [players, setPlayers] = useState<PlayerType[]>([]);
	return (
		<PlayersContext.Provider value={{ players, setPlayers }}>
			{children}
		</PlayersContext.Provider>
	);
}

export default PlayersProvider;