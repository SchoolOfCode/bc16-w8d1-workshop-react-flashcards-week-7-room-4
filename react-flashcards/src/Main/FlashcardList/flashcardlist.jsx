import Flashcard from "./Flashcard/flashcard";

export default function FlashcardList() {
	return (
		<div className="card-list">
			<Flashcard cardText={"some text here. card 1"} />
			<Flashcard cardText={"some text here.  card 2"} />
			<Flashcard cardText={"some text here. card 3"} />
			<Flashcard cardText={"some text here. card 3"} />
		</div>
	);
}
