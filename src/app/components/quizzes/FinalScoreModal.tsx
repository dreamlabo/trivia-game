import { PieChart, Pie, Cell, Label } from 'recharts';
import Link from 'next/link';

interface Quote {
    message: string;
}

interface Message {
    quotes: Quote[];
}
interface FinalScoreModalTypes {
    finalMessages: Message,
    quizName: string,
    finalScore: number;
    questionsLength: number,
    handleStartOver: () => void
}

export default function FinalScoreModal({finalMessages, quizName, finalScore, questionsLength, handleStartOver} : FinalScoreModalTypes) {
    // const [finalMessagesData, setFinalMessagesData] = useState<Message[]>([]);
    const COLORS = ['#628D7C', '#b1b5b5'];  // Custom colors for correct and incorrect
   
    const parseQuizName = () => {
        return quizName.replace(/_/g, ' '); // Removes all underscores
    }

    const calculatePercentage = () => {
        return Math.floor((finalScore/questionsLength) * 100) + '%'; 
    }

    const getDataForGraph = () => {
        return [
            { name: 'Correct', value: finalScore },
            { name: 'Incorrect', value: questionsLength - finalScore }
        ]
    }

    const getFinalScoreQuote = () => {
        console.log("LLLL", finalMessages.quotes[0].message)
        const percent = Math.floor((finalScore / questionsLength) * 100);
        switch (true) {
            case percent === 100:
                return finalMessages.quotes[0].message; // 100% message
            case percent >= 90:
                return finalMessages.quotes[2].message; // 90% message
            case percent >= 80:
                return finalMessages.quotes[2].message; // 80% message
            case percent >= 70:
                return finalMessages.quotes[3].message; // 70% message
            default:
                return finalMessages.quotes[4].message; // below 70% message
        }
        // return "No message available"; // Fallback message if there are no quotes
    }
    
    return (
        <div className="final-score-container">
            <div className="final-score-header-wrapper">
                <h2 className="header-left quiz-header-text-lg capitalize-text">{parseQuizName()}</h2>
                <div className="header-right">
                    <p className="header-middle">Final Score:</p>
                    <p >{calculatePercentage()}</p>
                </div>
            </div>
            <div className="quiz-results-inner-container">
                <div className="graph-wrapper">
                    <PieChart width={250 } height={250 }>
                        <Pie
                            data={getDataForGraph()}
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
                            {getDataForGraph().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                            {/* Use the Recharts Label component to place the text inside */}
                            <Label
                                value={`${finalScore}/${questionsLength}`} 
                                position="center"
                                fill="#e4e4e4"
                                fontSize={24}
                            />
                        </Pie>
                    </PieChart>   
                </div>
                
        <p className="quiz-congrats-message">{getFinalScoreQuote()}</p>
        </div>
        <div className="btn-play-again-container">
            <button onClick={handleStartOver} className="btn-play-again">Play Again</button>
            <Link className="btn-play-again" href="/">Choose Another Quiz</Link>
        </div>
    </div>
    )
}
