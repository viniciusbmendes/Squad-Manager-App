import { useState } from 'react';
import Swal from 'sweetalert2';

interface MyFormProps {
	onSubmit: (data: { nickname: string; class: string }) => void;
}

const classes = [
	'Warrior',
	'Paladin',
	'Hunter',
	'Rogue',
	'Priest',
	'Death Knight',
	'Shaman',
	'Mage',
	'Warlock',
	'Monk',
	'Druid',
	'Demon Hunter',
];

const AddPlayerForm: React.FC<MyFormProps> = ({ onSubmit }) => {
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
					icon: "warning",
					title: "Oops...",
					text: "Ja existe um player com esse nome!",
				});
			} else if (response.ok) {
				Swal.fire({
					icon: "success",
					title: "Player cadastrado com sucesso!",
					showConfirmButton: true,
					timer: 4000,
				})
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
		<form onSubmit={handleSubmit}>
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
			<button type='submit'>Cadastrar</button>
		</form>
	);
};

export default AddPlayerForm;
