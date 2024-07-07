import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { request } from '../services/request';
import { PlayerType } from '../types/PlayerType';
import Player from '../components/player';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddPlayerForm from '../components/add_player_form';
import PlayersContext from '../context/PlayersContext';
import Filter from '../components/filter';

const MySwal = withReactContent(Swal);

function Players() {
	const playersContext = useContext(PlayersContext);
	if (!playersContext) {
    throw new Error('SomeComponent must be used within a PlayersProvider');
  }
	const { players, setPlayers } = playersContext;
	const [loading, setLoading] = useState(true);
	const [filteredPlayers, setFilteredPlayers] = useState<PlayerType[]>(players);

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
	}, [setPlayers]);

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
			html: <AddPlayerForm onSubmit={handleFormSubmit} players={players} setPlayers={setPlayers} />,
			showCancelButton: false,
			showConfirmButton: false,
		});
	};

	return loading ? (
		<h1>Carregando...</h1>
	) : (
		<div>
			<h1>Lista de Membros</h1>
			<button onClick={showFormAlert}>Adicionar Membro</button>
			<Filter setFilteredPlayers={setFilteredPlayers}/>
			<div className='players-list'>
				{filteredPlayers.map((member: PlayerType) => (
					<Player key={member.player_id} {...member} />
				))}
			</div>
		</div>
	);
}

export default Players;
