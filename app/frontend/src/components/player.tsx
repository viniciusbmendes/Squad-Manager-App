import { PlayerType } from '../types/PlayerType';

export default function Player (player: PlayerType) {
  const { nickname, missedWars, player_id, class: classe} = player;

	const handleDelete = async () => {
		console.log(player);
		
		try {
			const response = await fetch(`http://localhost:3001/players/${player_id}`, {
				method: 'DELETE',
			});
			if (response.ok) {
				console.log('Player deletado com sucesso!');
			} else {
				console.error('Erro ao deletar player!');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};
	return (
		<div className='player' key={player_id}>
			<h3>{nickname}</h3>
			<p>{classe}</p>
			<p>Faltas: {missedWars}</p>
			<div>
				<button>Editar</button>
				<button onClick={handleDelete}>Excluir</button>
			</div>
		</div>
	);
}
