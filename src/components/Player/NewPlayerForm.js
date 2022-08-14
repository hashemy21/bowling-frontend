import React, { useState } from 'react';
import './Player.css';


const NewPlayerForm = ({ data, onSend }) => {
	const [inputText, setInputText] = useState('');

	const handleTextChange = (event) => {
		setInputText(event.target.value);
	};

	const handleSend = () => {
		onSend(inputText);
		setInputText('');
	};

	let validInput = data.includes(inputText);

	return (
		<div>
			<input
				type="text"
				data-testid="playerName"
				value={inputText}
				onChange={handleTextChange}
			/>
			<button className='addbutton'
				data-testid="sendButton"
				onClick={handleSend}
				disabled={validInput}
			>
				Send
			</button>
		</div>
	);
};

export default NewPlayerForm;
