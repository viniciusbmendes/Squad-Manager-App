import { PlayerType } from '../types/PlayerType';

export default function Player (player: PlayerType) {
  const { nickname, missedWars, id, class: classe} = player;
	return (
		<div className='player' key={id}>
			<h3>{nickname}</h3>
			<p>{classe}</p>
			<p>Faltas: {missedWars}</p>
			<div>
				<button>Editar</button>
				<button>Excluir</button>
			</div>
		</div>
	);
}
