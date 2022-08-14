import React, { useState } from 'react';
import NewPlayerForm from './components/Player/NewPlayerForm';
import PlayerList from './components/Player/PlayerList';
import Game from './components/Game';
import './App.css';

function Appp() {
	const [players, setPlayers] = useState([]);

	const [gameHasStarted, setGameHasStarted] = useState(false);

	const startGame = () => {
		setGameHasStarted(true);
	};

	const addPlayer = (newPlayer) => {
		setPlayers([...players, newPlayer]);
	};

	const deletePlayer = (playerToDelete) => {
		setPlayers(players.filter((player) => player !== playerToDelete));
	};

	const deleteAll = () => {
		setPlayers([]);
	};

	// const editPlayer = (playerToEdit, newPlayerName) => {
	// 	if (!players.includes(newPlayerName)) {
	// 		setPlayers(
	// 			players.map((player) =>
	// 				player !== playerToEdit ? player : newPlayerName
	// 			)
	// 		);
	// 	}
	// };

	const DeletePlayer = (player, isDelete, isEdit, newPlayerName) => {
		if (isDelete) {
			deletePlayer(player);}
		// } else if (isEdit) {
		// 	editPlayer(player, newPlayerName);
		// }
	};

	const gameStyle = {
		width: 600,
		margin: 'auto',
		marginTop: 100,
		backgroundColor: '#fafafa',
		textAlign: 'center',
		padding: 30,
	};

	if (!gameHasStarted) {
		return (
			<div style={gameStyle}>
				<header className="App-header">
					<h1 className="Title">Enter the players</h1>
				</header>
				<NewPlayerForm onSend={addPlayer} data={players} />
				<PlayerList onSend={DeletePlayer} data={players} />
				<button
					className="deleteallbutton"
					data-testid="removeAllPlayers"
					onClick={deleteAll}
				>
					Delete All
				</button>
				<button
					className="startgame"
					data-testid="startGameButton"
					onClick={startGame}
				>
					Start Game
				</button>
			</div>
		);
	} else {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="Title">Bowling</h1>
				</header>
				<p className="Intro">Enter your score in after each bowl</p>
				<Game playerName={setPlayers[players]} />
			</div>
		);
	}
}

export default Appp;
