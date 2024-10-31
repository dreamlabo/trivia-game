export interface QuizCardInfoType {
    title: string ,
    description: string ,
    quizURL: string ,
    backgroundImage: string 
  
}
export const QuizCardInfo: QuizCardInfoType[] = [
    {
        title: "Horror Movies",
        description: "A killer quiz for every horror fan—test your knowledge of the classics!",
        quizURL: "horror_movies",
        backgroundImage: "/images/horrorMovieBackground.png"
    },
    {
        title: "Final Girl",
        description: "From scream to screen, how well do you know the  Final Girls of horror?",
        quizURL: "final_girl",
        backgroundImage: "/images/finalGirlBackground.png"
    },
    {
        title: "Stranger Things",
        description: "Do you have what it takes to unlock the secrets of Hawkins and the Upside Down?",
        quizURL: "stranger_things",
        backgroundImage: "/images/strangerThingsBackground.png"
    },
    {
        title: "Classic Horror",
        description: "Journey back to the era that defined fear… How well do you know the classics?",
        quizURL: "classic_horror",
        backgroundImage: "/images/staircase.png"
    },
]