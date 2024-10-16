
'use client'
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import AnswerChoice from "./components/answerChoice";


const questions = [
  {
    question: "What King Crimson album contains the song 21st Century Schizoid Man?",
    answers: [
            'In the Wake of Poseidon',
            'In the Court of the Crimson King',
            'Starless and Bible Black',
            'Lizard' 
      ],
      correctAnswer: 'Starless and Bible Black'
  },
  {
    question: "Who was the principle songwriter in the band Spock's Beard?",
    answers: [
            'Alan Morse',
            'Dave Meros',
            'Ryo Okumoto',
            'Neal Morse' 
      ], 
      correctAnswer: 'Neal Morse'
  },
  {
    question: "Who plays lead guitar for Symphony X?",
    answers: [
            'George Lynch',
            'Timo Tolkki',
            'Michael Romeo',
            'Steve Lukather' 
      ], 
      correctAnswer: 'Michael Romeo'
  },
]


export default function Home() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerChosen, setAnswerChosen] = useState('')
  const [score, setScore] = useState(0)

  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleClick = (answer: string) => {
    console.log(answer)
    if(answer === questions[questionIndex].correctAnswer) {
      setIsAnswerCorrect(true)
      setScore(score => score + 1)
    }
    else {
      setIsAnswerCorrect(false)
    }

    setIsAnswered(true);
    setAnswerChosen(answer)
  }

  const handleNextButton = () => {
    if(questionIndex  >= questions.length - 1) {
      setIsQuizOver(true)
    }
      setIsAnswered(false)
      setQuestionIndex(prev => prev + 1)
  }

  return (
    <div className="page-wrapper">
      <main className="section-wrapper">
        <div className="quiz-container">
        {!isQuizOver && <>
                          <div className="question-container">{questions[questionIndex].question}</div>
                          <ul className="answer-container">
                            {questions[questionIndex].answers.map((answer) => {
                            return ( <AnswerChoice 
                                isCorrectAnswer={isAnswered && answer === questions[questionIndex].correctAnswer} 
                                isAnswered={isAnswered}
                                answer={answer} 
                                key={answer} 
                                answerChosen={answerChosen}
                                handleClick={handleClick}
                              />
                            )
                            })}
                          </ul>
                        </>}
        
        { isAnswered && (questionIndex  <= questions.length - 1) && <div className="btn-container"><button className="btn-next" onClick={handleNextButton}><span>{(questionIndex  >= questions.length - 1) ? `Show Score` : `Next`}</span><span><FaArrowRightLong /></span></button></div> }
        {isQuizOver && <div>Score: {score} out of {questions.length}</div>}
        </div>
      </main>
    </div>
  );
}