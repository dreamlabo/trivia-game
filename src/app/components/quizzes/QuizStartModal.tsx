
interface QuizProps {
    name: string,
    handleStartButton: () => void 
}

const tagLines = [
  {tagLine: "Face the darkness and prove your horror movie mastery!"},
  {tagLine: "Step into Hawkins… Are you ready to unravel the mysteries of the Upside Down?"},
  {tagLine: "Dare to face the killers? Prove your expertise in final girl lore!"},
]

export default function QuizStartModal({name, handleStartButton} : QuizProps) {
    const parseQuizName = () => {
        return name.replace(/_/g, ' '); // Removes all underscores
    }

    const getTagline = () => {
      switch(name) {
        case "horror_movies":
          return tagLines[0].tagLine;
        case "stranger_things":
          return tagLines[1].tagLine;
        case "final_girl":
          return tagLines[2].tagLine;
      }
    }

    return (
      <div className="quiz-start-modal-wrapper">
          <h1 className="quiz-name-header-text">{parseQuizName()}</h1>
          <p>{getTagline()}</p>
          <button  onClick={handleStartButton} className="btn-quiz-start">Begin Quiz</button>
      </div>
    )
}
