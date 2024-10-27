'use client'
import { useState, useEffect } from "react";
import QuizStartModal from "@/app/components/quizzes/QuizStartModal";
import QuizGame from "@/app/components/quizzes/QuizGame";
import FinalScoreModal from "@/app/components/quizzes/FinalScoreModal";

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

interface Quote {
    message: string;
}

interface Message {
    quotes: Quote[];
}

export default function QuizMainPage({ params }: { params: { name: string } }) {
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [hasQuizStarted, setHasQuizStarted] = useState(false);
    const [data, setData] = useState<Question[]>([]);
    const [finalMessagesData, setFinalMessagesData] = useState<Message | null>(null);
    const [finalScore, setFinalScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
   
    const parseQuizName = () => {
        return params.name.replace(/_/g, ' '); // Removes all underscores
    }

    const handleStartQuizButton = () => {
        setHasQuizStarted(true);
        setFinalScore(0);
        setIsQuizOver(false)
    }

    const handleQuizOver = (numCorrect : number) => {
        setIsQuizOver(true);
        setFinalScore(numCorrect)
      }

    const handleStartOver = () => {
        setFinalScore(0)
        setIsQuizOver(false)
    };

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(`/api/quizzes/${params.name}`);
          const json = await res.json();
          setData(json.questions);

          const responseFinalQuotes = await fetch(`/api/finalScoreQuotes/${params.name}`);
          const finalQuotesJson = await responseFinalQuotes.json();
          setFinalMessagesData(finalQuotesJson);
          setIsLoading(false);
        };
    
        fetchData();
      }, [params.name]);
   
    return (
       
        <div className="page-wrapper">
            <main className="section-wrapper">
            {isLoading && <div>Loading...</div>}
            {!isLoading && !isQuizOver && !hasQuizStarted && <QuizStartModal name={params.name} 
                                                        handleStartButton={handleStartQuizButton}
                                                />
            } 
            {!isQuizOver && hasQuizStarted && data && <QuizGame 
                                                        quizName={parseQuizName()} 
                                                        questions={data}
                                                        handleQuizOver={handleQuizOver}/>
            }

            {isQuizOver && finalMessagesData && <FinalScoreModal 
                                    finalMessages={finalMessagesData}
                                    quizName={params.name}
                                    finalScore={finalScore}
                                    questionsLength={data.length}
                                    handleStartOver={handleStartOver}
            />

        }
            </main>
      </div>
    )
}