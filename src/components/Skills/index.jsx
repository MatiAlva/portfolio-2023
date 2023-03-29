import { useEffect, useState } from 'react'
import { AnimatedLetters } from '../AnimatedLetters'
import Loader from 'react-loaders'
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { Layout } from '../Layout';


export const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])



    return (
        <>
            <Layout />
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
                        Experto en desarrollo front-end incluyendo tecnologias como :
                        <span className='yellow'> HTML5, SASS, CSS, REACT, Styled-Components, JavaScript,
                            Bootstrap, Git, JQUERY.
                        </span>
                    </p>
                    <p>Tambien tengo conocimientos y experiencia en lengujes de back-end como :
                        <span className='yellow'> PHP, NODEJS, EXPRES, JWT, MYSQL, MONGODB,
                            JEST, JAVA.
                        </span>
                    </p>
                    <p>
                        Visita mi perfil de <a
                            href='https://www.linkedin.com/in/mati-dev/'
                            target='_blank'
                            className='yellow'>
                            LinkedIn
                        </a> para mas detalles. Tambien puede consultar mi CV <a
                            href='/CV/Alvarez-Matias-CV.pdf'
                            download={true}
                            className='yellow'
                        >
                            en este enlace</a> o sientase libre de echar un
                        vistazo a algunos de mis proyectos en mi <a
                            href='https://github.com/MatiAlva'
                            target='_blank'
                            className='yellow'>
                            Github
                        </a>.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color="#35b62e" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faGithub} color="#0c0c0c" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faSass} color="#a83173" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='ball-pulse' />
        </>
    )
}