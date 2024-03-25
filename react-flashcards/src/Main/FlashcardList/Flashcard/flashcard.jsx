/* eslint-disable react/prop-types */
export default function Flashcard(props) {
	return (
		<div className="flash-card">
			<p className="think-emoji emoji">🤔</p>
			<p className="card-text">{props.cardText}</p>
		</div>
	);
}
