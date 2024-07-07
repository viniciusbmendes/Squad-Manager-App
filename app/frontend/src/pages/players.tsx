import { useEffect, useState } from 'react';
import { request } from '../services/request';
import { PlayerType } from '../types/PlayerType';
import Player from '../components/player';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddPlayerForm from '../components/add_player_form';

const MySwal = withReactContent(Swal);

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

	const handleFormSubmit = (data: { nickname: string; class: string }) => {
		MySwal.fire({
			title: 'Form Submitted',
			text: `Nickname: ${data.nickname}, Class: ${data.class}`,
			icon: 'success',
		});
	};

	const showFormAlert = () => {
		MySwal.fire({
			title: 'Enter Player Details',
			html: <AddPlayerForm onSubmit={handleFormSubmit} />,
			showCancelButton: true,
			showConfirmButton: false,
		});
	};

	return loading ? (
		<h1>Carregando...</h1>
	) : (
		<div>
			<h1>Lista de Membros</h1>
			<button onClick={showFormAlert}>Adicionar Membro</button>
			<div className='players-list'>
				{players.map((member: PlayerType) => (
					<Player key={member.id} {...member} />
				))}
			</div>
		</div>
	);
}

export default Players;
