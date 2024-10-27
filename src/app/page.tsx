'use client'
// import Image from 'next/image'
import Link from 'next/link';
// import HorrorBackground from "../../public/images/horror-background.png"
// import CardOneImage from "../../public/images/CardOneImage.png"

export default function Home() {

  return (
    <main>
      <div className='background-container'>
        <div className='homepage-overlay'></div>
        {/* <Image className='homepage-background'
            src={HorrorBackground}
            width={1000}
            height={1000}
            alt="Picture of the author"
          /> */}
          <div className='homepage-background'> </div>
            <section className='header-wrapper'>
              <div className='hero-text-wrapper'>
                <div className='hero-text-main'>
                  <h1>Step into the <span className='hero-text-main--accent'>shadows</span> and prove your <span className='hero-text-main--accent'>horror</span> expertise.</h1>
                </div>
              </div>

              <div className='bring-to-front'>
                <h2 className='quiz-list-text-header'>Unveil Your Chosen Terror</h2>
                <ul className='cards-wrapper'>
                  <li className='card-container'>
                    <Link href={`/quiz/horror_movies`} className='inner-card'>
                      <div className='card-background'>
                      <div className='card-overlay'></div>
                        <div className='card-text-wrapper'>
                        <div className='text-overlay'></div>
                          
                          <h3>Horror Movies</h3>
                          <p>A killer quiz for every horror fan—test your knowledge of the classics!</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='card-container'>
                    <Link href={`/quiz/final_girl`} className='inner-card'>
                      <div className='card-background'
                          style={{
                              backgroundImage: 'url("/images/finalGirlBackground.png")'
                            }}>
                      <div className='card-overlay'></div>
                        <div className='card-text-wrapper'>
                        <div className='text-overlay'></div>
                          
                          <h3>Final Girl</h3>
                          <p>From scream to screen, how well do you know the  Final Girls of horror?</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className='card-container'>
                    <Link href={`/quiz/horror_movies`} className='inner-card'>
                      <div className='card-background'       
                            style={{
                              backgroundImage: 'url("/images/strangerThingsBackground.png")'
                            }}>
                      <div className='card-overlay'></div>
                        <div className='card-text-wrapper'>
                        <div className='text-overlay'></div>
                          
                          <h3>Stranger Things</h3>
                          <p>Do you have what it takes to unlock the secrets of Hawkins and the Upside Down?</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
         
          <section></section>
      </div>
    </main>
  );
}