
interface QuizProps {
    name: string
}

export default function Quiz({name} : QuizProps) {
    const parseQuizName = () => {
        return name.replace(/_/g, ' '); // Removes all underscores

    }
  return (
    <div className="quiz-start-modal-wrapper">
        <h1 className="quiz-name-header-text">{parseQuizName()}</h1>
        <p>Face the darkness and prove your horror movie mastery!</p>
        <button className="btn-quiz-start ">Begin Quiz</button>
    </div>
  )
}
