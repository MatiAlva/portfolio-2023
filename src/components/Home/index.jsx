import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'
import Lottie from 'lottie-react'
import lottieHome from '../../assets/data/lottie-home.json'
import Loader from 'react-loaders'

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 't', 'i', 'a', 's']
    const jobArray = ['F', 'r', 'o', 'n', 'E', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>o</span>
                        <span className={`${letterClass} _13`}>l</span>
                        <span className={`${letterClass} _14`}>a</span>
                        <br />
                        <span className={`${letterClass} _15`}>S</span>
                        <span className={`${letterClass} _16`}>o</span>
                        <span className={`${letterClass} _17`}>y</span>
                        <img src={Logo} alt='desarrollador' />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24} />
                    </h1>
                    <h2> FrontEnd Developer / Tecnico Programador </h2>
                    <Link to='mailto:matyy01.ma@gmail.com' className='flat-button'>CONTACTAME</Link>
                </div>

                <div className='container-animation'>
                    <Lottie
                        animationData={lottieHome}
                        loop={true}
                        className='lottieHome'
                    />
                </div>
            </div>
            <Loader type='ball-pulse' />
        </>
    )
}