import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../assets/data/porjects.json'

export const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData)


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div key={idx} className='images-box'>
                                <img src={port.cover} alt={port.title} className='portfolio-image' />
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.tecnologis}</h4>
                                    <button
                                        className='btn'
                                        onClick={() => window.open(port.web)}
                                    >
                                        Ir
                                    </button>
                                    <button
                                        className='btn'
                                        onClick={() => window.open(port.github)}
                                    >
                                        Codigo
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className='container projects-page'>
                <div className='page-title'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'y', 'e', 'c', 't', 'o', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type='ball-pulse' />
        </>
    )
}