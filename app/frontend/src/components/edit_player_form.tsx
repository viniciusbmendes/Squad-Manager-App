import { Dispatch, SetStateAction, useState } from 'react';
import Swal from 'sweetalert2';
import { PlayerType } from '../types/PlayerType';
import { classes } from '../utils/classes';

interface MyFormProps {
  playerData:PlayerType;
	players:PlayerType[];
	setPlayers:Dispatch<SetStateAction<PlayerType[]>>;
}

const EditPlayerForm: React.FC<MyFormProps> = ({ playerData, players, setPlayers }) => {

	const [player, setPlayer] = useState(playerData);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setPlayer({
			...player,
			[e.target.name]: e.target.value,
		});
	};

	const handleEdit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:3001/players/${playerData.player_id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(player),
			});
			if (response.ok) {
				Swal.fire({
					icon: "success",
					title: "Player editado com sucesso!",
					showConfirmButton: true,
					timer: 4000,
				})
				const newPlayer = await response.json();
        const newPlayers = players.map((p) =>
          p.player_id === newPlayer.player_id ? newPlayer : p
        );
				setPlayers(newPlayers);
			} else {
				Swal.fire({
					icon: "warning",
					title: "Oops...",
					text: "Resposta inesperada do servidor! Tente novamente!",
				});
			}
		} catch (error) {
			console.error('Error:', error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Algo deu errado! Tente novamente!",
			});
		}
	};

	return (
		<form onSubmit={handleEdit}>
			<label>
				Nick:
				<input
					type='text'
					name='nickname'
					value={player.nickname}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Class:
				<select name='class' value={player.class} onChange={handleChange}>
					{classes.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</label>
			<br />
			<button type='submit'>Confirmar</button>
		</form>
	);
};

export default EditPlayerForm;
