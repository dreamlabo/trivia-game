
'use client'
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { PieChart, Pie, Cell, Tooltip, Label } from 'recharts';


import AnswerChoice from "./components/answerChoice";

import {MessageDataHorror, MessageTypeHorror} from '../../data/horror/finalScoreQuotesHorror'

const data = [
  { name: 'Correct', value: 3 },
  { name: 'Incorrect', value: 7 }
];

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
  {
    question: "Who is the murderer in Friday the 13th?",
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


  const COLORS = ['#628D7C', '#b1b5b5'];  // Custom colors for correct and incorrect

  const [isAnswered, setIsAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerChosen, setAnswerChosen] = useState('')
  const [score, setScore] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleStartOver = () => {
    setIsAnswered(false)
    setQuestionIndex(prev => 0)
    setAnswerChosen('')
    setScore(0)
    // setIsMounted(false)
    setIsQuizOver(prev => false)
  };

  const handleClick = (answer: string) => {
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

 

  const calculatePercentage = () => {
    const percent = score/questions.length;

     const percentage = percent * 100;
     return Math.floor((score/questions.length) * 100) + '%'; 
  }

  const dataForGraph = () => {
    return [
      { name: 'Correct', value: score },
      { name: 'Incorrect', value: questions.length - score }
    ]
  }

  const getFinalScoreQuote = () => {
    const percent = Math.floor((score/questions.length) * 100)
    switch(true) {
      case percent === 100:
        return MessageDataHorror[0].message;
      case percent >= 90:
        return MessageDataHorror[1].message;
      case percent >= 80:
          return MessageDataHorror[2].message;
      case percent >= 70:
        return MessageDataHorror[3].message;
      default:
        
        return MessageDataHorror[4].message
    }
  }


  useEffect(() => {
    // This ensures the chart is rendered only on the client side
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render null on the server (or during initial render)
    return null;
  }


  return (
    <div className="page-wrapper">
      <main className="section-wrapper">
        
        {!isQuizOver && <>
          <div className="quiz-container">
                          <div className="quiz-header-wrapper">
                            <div>
                              <h2 className="quiz-header-text-lg">Horror Movies</h2>
                            </div>
                            <div>
                              <p>Question {questionIndex + 1} of {questions.length}</p>
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
        </>}
        
       
        {isQuizOver &&  
               <div className="final-score-container">
                  <div className="final-score-header-wrapper">
                    <h2 className="header-left quiz-header-text-lg">Horror Movies</h2>
                    <div className="header-right">
                      <p className="header-middle">Final Score:</p>
                      <p >{calculatePercentage()}</p>
                    </div>
                  </div>
                  <div className="quiz-results-inner-container">
                    <div className="graph-wrapper">
                      <PieChart width={250 } height={250 }>
                        <Pie
                          data={dataForGraph()}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}  
                          outerRadius={100}  
                          fill="#8884d8"
                          dataKey="value"
                          stroke="none"
                          startAngle={90} 
                          endAngle={-270}
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          ))}
                          {/* Use the Recharts Label component to place the text inside */}
                          <Label
                            value={`${score}/${questions.length}`} 
                            position="center"
                            fill="#e4e4e4"
                            fontSize={24}
                          />
                        </Pie>
                        {/* <Tooltip /> */}
                      </PieChart>   
                    </div>
                    <p className="quiz-congrats-message">{getFinalScoreQuote()}</p>
                  </div>
                  <div className="btn-play-again-container">
                    <button onClick={handleStartOver} className="btn-play-again">Play Again</button>
                  </div>
                </div>
        }
      </main>
    </div>
  );
}