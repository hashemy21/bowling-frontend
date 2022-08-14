import React, { Component } from 'react';

import Scorecard from '../Scorecard';
import Controls from '../Controls';

import './Game.css';

export default class Game extends Component {
	render() {
		const {
			game: { frames, cumulativeScores,playerName, gameOver, pins, rolls },
		} = this.props;

		const totalScore = cumulativeScores.slice(-1)[0];
		return (
			<div className="Game">
				<Scorecard
					frames={frames}
					cumulativeScores={cumulativeScores}
					totalScore={totalScore}
					playerName={playerName}
				/>
				<Controls
					gameOver={gameOver}
					lastRoll={pins.slice(-1)[0]}
					rolls={rolls}
				/>
				{gameOver && (
					<div className="Game-over-text">
						<h1>Game Over</h1>
						<h2>You Scored: {totalScore}</h2>
					</div>
				)}
			</div>
		);
	}
}
