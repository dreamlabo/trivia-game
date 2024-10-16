import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

// type HandleClickType = (message: string) => string;

interface AnswerProps  {
  answer: string,
  isCorrectAnswer: boolean,
  isAnswered: boolean,
  answerChosen: string;
  handleClick: (message: string) => void
}

export default function answerChoice({answer, isCorrectAnswer, isAnswered, answerChosen, handleClick}: AnswerProps) {
  // 1. the question has not been answered
  //    Display button as normal
  let buttonStyle = ''

  // 1. Question has not been answered yet
  if(!isAnswered) {
    buttonStyle = "btn-unanswered"
  }

  // 2. The Question has been answered and the answer is correct
  //    Display the button as GREEN and disable it
  else if (isAnswered && isCorrectAnswer) {
      buttonStyle = "btn-answer-correct"
  }

  // 3. The question has been answered and the answer is NOT correct
  //    Display the button as red and disable it
  else if (isAnswered && !isCorrectAnswer && (answer === answerChosen )) {
    buttonStyle = "btn-answer-incorrect"
  }

  // 2. The question has been answered and the answer was not chosen
  //    Display the button as GRAY and disable it
  else {
    buttonStyle = 'btn-not-chosen'
  }

  return (
    <li className='ind-answer-container'>
      <button 
    disabled={isAnswered}
    className={buttonStyle} 
      onClick={() => handleClick(answer)}>
        {answer}
        </button>
          {
            isAnswered && isCorrectAnswer && (answer === answerChosen ) && <FaCircleCheck className='icon--correct-answer' />
          }
          {
            isAnswered && !isCorrectAnswer && (answer === answerChosen ) && <IoMdCloseCircle className='icon--wrong-answer'/>
          }
    </li>
  )
}
