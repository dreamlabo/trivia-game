import { NextResponse } from "next/server"

export async  function GET( request: Request,
  { params }: { params: { quizName: string } }) {
    const { quizName } = params;
  
    try {
      let data;
      let quotes

      switch(quizName) {
        case 'horror_movies':
          data = await import('../../../data/Horror/finalScoreQuotesHorror');
          quotes = data.MessageDataHorror;
          break;
        case 'stranger_things':
          data = await import('../../../data/StrangerThings/FinalScoreQuotesStrangerThings');
          quotes = data.MessageDataStrangerThings;
          break;
        case 'final_girl':
          data = await import('../../../data/FinalGirls/FinalScoreQuotesFinalGirls');
          quotes = data.MessageDataFinalGirl;
          break;
        default:
          return NextResponse.json({ message: 'Data not found' }, {status: 200});
      }
  
      return NextResponse.json({quotes}, {status: 200});
    } catch (error) {
     return NextResponse.json({ message: 'Error loading data', error: error }, {status: 500});
    }
  }