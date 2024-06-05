import { useEffect, useState } from 'react';
import { request } from '../services/request';
import { PlayerType } from '../types/PlayerType';
import Player from '../components/player';

function Players() {

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('Componente montado');
		const getPlayers = async () => {
			const data = await request('http://localhost:3001/players');
			console.log(data);
      setPlayers(data);
      setLoading(false);
			return data;
		};
    getPlayers();
	}, []);

	return (
    loading ? <h1>Carregando...</h1> :
		<div>
			<h1>Lista de Membros</h1>
			<button>Adicionar Membro</button>
			<div className='players-list'>
        {players.map((member: PlayerType) => (
          <Player key={member.id}  {...member}/>
        ))}
			</div>
		</div>
	);
}

export default Players;
