import { Dispatch, SetStateAction, useState } from 'react';
import Swal from 'sweetalert2';
import { PlayerType } from '../types/PlayerType';
import { classes } from '../utils/classes';

interface MyFormProps {
	onSubmit: (data: { nickname: string; class: string }) => void;
	players: PlayerType[];
	setPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

const AddPlayerForm: React.FC<MyFormProps> = ({
	onSubmit,
	players,
	setPlayers,
}) => {
	const [player, setPlayer] = useState({
		nickname: '',
		class: classes[0],
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setPlayer({
			...player,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ nickname: player.nickname, class: player.class });

		try {
			const response = await fetch('http://localhost:3001/players', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(player),
			});

			if (response.status === 409) {
				Swal.fire({
					icon: 'warning',
					title: 'Oops...',
					text: 'Ja existe um player com esse nome!',
				});
			} else if (response.ok) {
				Swal.fire({
					icon: 'success',
					title: 'Player cadastrado com sucesso!',
					showConfirmButton: true,
					timer: 4000,
				});
				const newPlayer = await response.json();
				setPlayers([...players, newPlayer]);
			} else {
				Swal.fire({
					icon: 'warning',
					title: 'Oops...',
					text: 'Resposta inesperada do servidor! Tente novamente!',
				});
			}
		} catch (error) {
			console.error('Error:', error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Algo deu errado! Tente novamente!',
			});
		}
	};

	const handleCancel = (e: React.FormEvent) => {
		e.preventDefault();
		Swal.close();
	};

	return (
		<form onSubmit={handleSubmit} className='text-white'>
			<label className='block'>
				<span>Nick:</span>
				<input
					type='text'
					name='nickname'
					value={player.nickname}
					onChange={handleChange}
					className='border border-gray-300 rounded-2xl h-8 pl-4 text-neutral-800 w-48 m-3 align-middle'
					required
				/>
			</label>
			<label className='block'>
				<span>Class:</span>
				<select
					name='class'
					value={player.class}
					onChange={handleChange}
					className='border border-gray-300 rounded-2xl h-8 pl-3 text-neutral-800 w-48 m-3 align-middle'
				>
					{classes.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</label>
			<br />
			<button
				onClick={handleCancel}
				className='bg-red-500 w-40 m-2 h-10 rounded hover:bg-neutral-950 transition duration-300'
			>
				Cancelar
			</button>
			<button
				type='submit'
				className='bg-blue-500 w-40 m-2 h-10 rounded hover:bg-neutral-950 transition duration-300'
			>
				Cadastrar
			</button>
		</form>
	);
};

export default AddPlayerForm;
