import { NextResponse } from "next/server"

export async function GET( request: Request,
  { params }: { params: { quizName: string } }) {
    const { quizName } = params;
  
    try {
      let data;
      let questions

      switch(quizName) {
        case 'horror_movies':
          data = await import('../../../data/Horror/HorrorMovies');
          questions = data.HorrorMoviesQuestions;
          break;
        case 'stranger_things':
          data = await import('../../../data/StrangerThings/StrangerThings');
          questions = data.StrangerThingsQuestions;
          break;
        case 'final_girl':
          data = await import('../../../data/FinalGirls/FinalGirls');
          questions = data.FinalGirlQuestions;
          break;
        default:
          return NextResponse.json({ message: 'Data not found' }, {status: 200});
      }
  
      return NextResponse.json({questions}, {status: 200});
    } catch (error) {
      
     return NextResponse.json({ message: 'Error loading data', error: error }, {status: 500});
    }
  }