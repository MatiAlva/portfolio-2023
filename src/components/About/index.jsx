import { useEffect, useState } from 'react'
import { AnimatedLetters } from '../AnimatedLetters'
import Lottie from 'lottie-react'
import lottieAbout from '../../assets/data/lottie-about.json'
import Loader from 'react-loaders'

export const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Soy Técnico Programador y Desarrollador Front End con amplios conocimientos y experiencia como Desarrollador Full Stack.
                        Soy un gran trabajador en equipo capaz de aprender y aplicar rápidamente las nuevas tecnologías.
                    </p>
                </div>

                <div className='container-animation'>
                    <Lottie
                        animationData={lottieAbout}
                        loop={true}
                    />
                </div>

            </div>
            <Loader type='ball-pulse' />
        </>
    )
}
