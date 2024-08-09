import { useContext } from 'react';
import { PlayerType } from '../types/PlayerType';
import PlayersContext from '../context/PlayersContext';
import Swal from 'sweetalert2';
import EditPlayerForm from './edit_player_form';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function Player(player: PlayerType) {
	const { nickname, missedWars, player_id, class: classe } = player;

	const playersContext = useContext(PlayersContext);
	if (!playersContext) {
		throw new Error('SomeComponent must be used within a PlayersProvider');
	}
	const { players, setPlayers } = playersContext;

	const handleDelete = async () => {
		const result = await Swal.fire({
			title: 'Você tem certeza?',
			text: 'Você não poderá reverter isso!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, deletar!',
		});

		if (result.isConfirmed) {
			try {
				const response = await fetch(
					`http://localhost:3001/players/${player_id}`,
					{
						method: 'DELETE',
					}
				);
				if (response.ok) {
					console.log('Player deletado com sucesso!');
					Swal.fire({
						title: 'Deleted!',
						text: 'Your file has been deleted.',
						icon: 'success',
					});
					const newPlayers = players.filter(
						(player: PlayerType) => player.player_id !== player_id
					);
					setPlayers(newPlayers);
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Erro ao deletar jogador!',
					});
					console.error('Erro ao deletar player!');
				}
			} catch (error) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Algo deu errado! Tente novamente!',
				});
				console.error('Error:', error);
			}
		}
	};

	const handleEdit = () => {
		console.log('Editando jogador');
		MySwal.fire({
			title: 'Enter Player Details',
			customClass: {
				popup: 'bg-neutral-700',
				title: 'text-white',
			},
			html: (
				<EditPlayerForm
					playerData={player}
					players={players}
					setPlayers={setPlayers}
				/>
			),
			showCancelButton: false,
			showConfirmButton: false,
			showCloseButton: true,
		});
	};

	return (
		<div
			className={`bg-${player.class
				.replace(' ', '')
				.toLowerCase()} rounded-2xl border-2 border-white overflow-hidden
				h-min
				`
			}
			key={player_id}
		>
			<h3>{nickname}</h3>
			<p>{classe}</p>
			<p>Faltas: {missedWars}</p>
			<div>
				<button
					className='bg-neutral-700 w-3/6 hover:bg-neutral-900 transition border-e-2 border-t-2 border-white'
					onClick={handleEdit}
				>
					Editar
				</button>
				<button
					className='bg-neutral-700 w-3/6 hover:bg-neutral-900 transition border-s-1 border-t-2 border-white'
					onClick={handleDelete}
				>
					Excluir
				</button>
			</div>
		</div>
	);
}
