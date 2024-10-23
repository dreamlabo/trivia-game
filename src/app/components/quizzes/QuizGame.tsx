'use client'
import {useState} from 'react'
import AnswerChoice from '../answerChoice';

import { FaArrowRightLong } from "react-icons/fa6";

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

interface QuizGameTypes  {
    quizName: string,
    questions: Question[],
    handleQuizOver: (numCorrect: number) => void
}

export default function QuizGame({quizName, questions, handleQuizOver}: QuizGameTypes) {
    const [isAnswered, setIsAnswered] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerChosen, setAnswerChosen] = useState('');
    const [score, setScore] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

    const parseQuizName = () => {
        return quizName.replace(/_/g, ' '); // Removes all underscores
    }

    const handleClick = (answer: string) => {
        if(answer === questions[questionIndex].correctAnswer) {
        //   setIsAnswerCorrect(true)
          setScore(score => score + 1)
          console.log(isAnswerCorrect)
        }
        else {
          setIsAnswerCorrect(false);
        }
    
        setIsAnswered(true);
        setAnswerChosen(answer)
      }

      const handleNextButton = () => {
        if(questionIndex  >= questions.length - 1) {
            handleQuizOver(score)
        //   setIsQuizOver(true)
        }
          setIsAnswered(false)
          setQuestionIndex(prev => prev + 1)
      }

  return (
    <div className="quiz-container">
                            <div className="quiz-header-wrapper">
                                <div>
                                    <h2 className="quiz-header-text-lg capitalize-text">{parseQuizName()}</h2>
                                </div>
                                <div>
                              <p className='question-count-text'>Question {questionIndex + 1} of {questions.length}</p>
                            </div>
                            </div>
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
                          {isAnswered && (questionIndex  <= questions.length - 1) && <div className="btn-container"><button className="btn-next" onClick={handleNextButton}><span>{(questionIndex  >= questions.length - 1) ? `Show Score` : `Next`}</span><span><FaArrowRightLong /></span></button></div> }
   
    </div>
  )
}
