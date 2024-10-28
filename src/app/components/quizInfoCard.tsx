import Link from 'next/link';

interface quizInfoCardProps {
    title: string,
    description: string,
    quizURL: string,
    backgroundImage: string
}

export default function quizInfoCard({title, description, quizURL, backgroundImage}: quizInfoCardProps) {
  return (
    <>
        <li className='card-container'>
            <Link href={`/quiz/${quizURL}`} className='inner-card'>
                <div className='card-background'  
                    style={{
                        backgroundImage: `url("${backgroundImage}")`
                    }}>
                    <div className='card-overlay'></div>
                    <div className='card-text-wrapper'>
                        <div className='text-overlay'></div>
                        <h3>{title}</h3>
                        <p>{description!}</p>
                    </div>
                </div>
            </Link>
        </li>
    </>
  )
}