import { useContext, useEffect, useState } from 'react';
import PlayersContext from '../context/PlayersContext';
import { PlayerType } from '../types/PlayerType';
import { classes } from '../utils/classes';

interface FilterProps {
	setFilteredPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
}

export default function Filter({ setFilteredPlayers }: FilterProps) {
	const playersContext = useContext(PlayersContext);
	if (!playersContext) {
		throw new Error('SomeComponent must be used within a PlayersProvider');
	}
	const { players } = playersContext;

	const [filter, setFilter] = useState({
		search: '',
		classe: '',
		order: 'nickname' as 'nickname' | 'class',
	});

	const { search, classe, order } = filter;

	useEffect(() => {
		let fPlayers = players.filter((player) =>
			player.nickname.toLowerCase().includes(filter.search.toLowerCase())
		);

		if (classe) {
			fPlayers = fPlayers.filter((player) => player.class === classe);
		}

		if (order) {
			fPlayers.sort((a, b) => {
				if (a[order].toLowerCase() > b[order].toLowerCase()) {
					return 1;
				}
				if (a[order].toLowerCase() < b[order].toLowerCase()) {
					return -1;
				}
				return 0;
			});
		}

		setFilteredPlayers(fPlayers);
	}, [filter, players, setFilteredPlayers, classe, order]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<input
				type='text'
				value={search}
				name='search'
				onChange={handleChange}
				placeholder='Pesquisar por nome'
				className='border border-gray-300 rounded-s-2xl h-8 p-2 align-top text-neutral-800'
			/>
			<select
				name='classe'
				id='classe'
				value={classe}
				onChange={handleChange}
				className='border border-gray-300 rounded-e-2xl h-8 text-neutral-200 bg-neutral-700'
			>
				<option value=''>Todas as classes</option>
				{classes.map((classe, index) => {
					return (
						<option key={index} value={classe}>
							{classe}
						</option>
					);
				})}
			</select>
			<div className='p-4'>
				<span className='m-2'>Ordernar por :</span>
				<label className='m-2'>
					<input
						type='radio'
						name='order'
						value='nickname'
						checked={order === 'nickname'}
						onChange={handleChange}
					/>
					Nome
				</label>
				<label className='m-2'>
					<input
						type='radio'
						name='order'
						value='class'
						checked={order === 'class'}
						onChange={handleChange}
					/>
					Classe
				</label>
			</div>
		</div>
	);
}
