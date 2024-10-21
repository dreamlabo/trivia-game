'use client'
import { useState } from "react";
import Quiz from "@/app/components/quizzes/Quiz";


export default function QuizMainPage({ params }: { params: { name: string } }) {
    const [isQuizOver, setIsQuizOver] = useState(false);

    
   
    return (
        <div className="page-wrapper">
            <main className="section-wrapper">
            {!isQuizOver && <Quiz name={params.name}/>} 
            </main>
      </div>
    )
}