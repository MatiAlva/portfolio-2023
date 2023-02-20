import { useEffect, useState } from 'react'
import TextTags from './textTags'
import { AnimatedLetters } from '../AnimatedLetters'
import Loader from 'react-loaders'

export const Skills = () => {

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
                            strArray={['T', 'e', 'c', 'n', 'o', 'l', 'o', 'g', 'i', 'a', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Soy Técnico Programador y Desarrollador Front End con amplios conocimientos y experiencia como Desarrollador Full Stack.
                        Soy un gran trabajador en equipo capaz de aprender y aplicar rápidamente las nuevas tecnologías.
                    </p>
                </div>

                <div className='container-animation'>
                    <TextTags />
                </div>
            </div>
            <Loader type='ball-pulse' />
        </>
    )
}