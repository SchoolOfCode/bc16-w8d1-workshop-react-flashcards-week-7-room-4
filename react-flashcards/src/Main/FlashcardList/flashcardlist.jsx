import Flashcard from "./Flashcard/flashcard";

export default function FlashcardList() {
	return (
		<div className="card-list">
			<Flashcard questionText={"some text here. card 1"} answerText={"answer here. card 1"}/>
			<Flashcard questionText={"some text here.  card 2"} answerText={"answer here. card 2"}/>
			<Flashcard questionText={"some text here. card 3"} answerText={"answer here. card 3"}/>
			<Flashcard questionText={"some text here. card 4"} answerText={"answer here. card 4"}/>
		</div>
	);
}
