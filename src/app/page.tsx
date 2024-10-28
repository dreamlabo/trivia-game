'use client'

import QuizInfoCard from './components/quizInfoCard';
import { QuizCardInfo, QuizCardInfoType } from './data/quizCardInfo/quizCardInfo';

export default function Home() {
  return (
    <main>
      <div className='background-container'>
        <div className='homepage-overlay'></div>
          <div className='homepage-background'> </div>
            <section className='header-wrapper'>
              <div className='hero-text-wrapper'>
                <div className='hero-text-main'>
                  <h1>Step into the <span className='hero-text-main--accent shadows'>shadows</span> and prove your <span id="glitch-text" className='hero-text-main--accent glitch-text'><div title="horror"  className='glitch-text'>horro<span className='glitch-letter'>r</span></div></span> expertise.</h1>
                </div>
              </div>
              <div className='bring-to-front'>
                <h2 className='quiz-list-text-header'>Unveil Your Chosen Terror</h2>
                <ul className='cards-wrapper'>
                  {QuizCardInfo.map((card : QuizCardInfoType) => {
                    return(
                      <QuizInfoCard
                      key={card.description}
                      title={card.title}
                      description={card.description}
                      backgroundImage={card.backgroundImage}
                      quizURL={card.quizURL}
                   /> 
                    )   
                  })}
                </ul>
              </div>
            </section>
      </div>
    </main>
  );
}