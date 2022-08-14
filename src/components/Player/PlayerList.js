import React from 'react';
//import EditPlayerForm from './EditPlayerForm';
import './Player.css'


const PlayerList = ({ data, onSend }) => {
	// const [isEditing, setIsEditing] = useState(false);

	// const toggleIsEditing = () => {
	// 	setIsEditing(!isEditing);
	// };

	const handleDeletePlayer = (player) => {
		onSend(player, true, false);
	};

	return (
		<div>
			<h3>{data.length} players:</h3>
			<ul>
				{data.map((player) => (
					<div>
						<li data-testid={player} key={player}>
							{(
								<p data-testid={'display' + player}>
									{player}
								</p>
							)}
							<button className='deletebutton'
								data-testid={'remove' + player}
								onClick={() => handleDeletePlayer(player)}
								value={player}
							>
								Delete {player}
							</button>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
};

export default PlayerList;
