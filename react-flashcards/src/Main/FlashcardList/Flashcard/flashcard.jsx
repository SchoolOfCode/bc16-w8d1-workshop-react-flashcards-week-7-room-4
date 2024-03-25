/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Flashcard(props) {
	const [flipped, setFlipped] = useState(false)

	function handleClick(){
		setFlipped(!flipped)
	}

	if (!flipped){
		return (
			<div className="flash-card" onClick={handleClick}>
				<p className="emoji">🤔</p>
				<p className="card-text">{props.questionText}</p>
			</div>
				)
			}
	else{
		return (
			<div className="flash-card" onClick={handleClick}>
				<p className="emoji">🤓</p>
				<p className="card-text">{props.answerText}</p>
			</div>
		)
	}
}