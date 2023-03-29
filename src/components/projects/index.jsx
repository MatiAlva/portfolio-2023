import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../assets/data/porjects.json'
import { RenderCard } from './RenderCard'
import { Layout } from '../Layout'

export const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData)


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])



    return (
        <>
            <Layout />
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
                <RenderCard portfolio={portfolioData.portfolio} />
            </div>
            <Loader type='ball-pulse' />
        </>
    )
}