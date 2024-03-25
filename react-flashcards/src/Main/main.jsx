import { useState } from "react"
import Form from "./Form/form"
import FlashcardList from "./FlashcardList/flashcardlist"

export default function Main() {
    let initialCardList = [
  {
    question: "question1 ",
    answer: "answer1",
    id: "",
  },
  {
    question: "question2",
    answer: "answer2",
    id: "",
  },
  {
    question: "question3",
    answer: "answer3",
    id: "",
  },
    ];
    
    const [cardList, setCardList] = useState(initialCardList)
    return (
        <div className="main">
            <Form/>
            <FlashcardList/>
        </div>
    )
}