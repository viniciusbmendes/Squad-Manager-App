import { useState } from 'react';

interface MyFormProps {
  onSubmit: (data: { nickname: string; class: string }) => void;
}

const AddPlayerForm: React.FC<MyFormProps> = ({ onSubmit }) => {
	const [nickname, setNickname] = useState('');
	const [playerClass, setPlayerClass] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ nickname, class: playerClass });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Nick:
				<input
					type='text'
					value={nickname}
					onChange={(e) => setNickname(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Class:
				<input
					type='text'
					value={playerClass}
					onChange={(e) => setPlayerClass(e.target.value)}
				/>
			</label>
			<br />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddPlayerForm;
