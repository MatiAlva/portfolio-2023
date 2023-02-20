import { useEffect } from "react";
import TagCloud from "TagCloud";
import './index.scss'


const TextTags = () => {
    useEffect(() => {
        return () => {
            const conatiner = '.tagCloud'
            let radii
            const texts = [
                'HTML',
                'CSS',
                'SASS',
                'Styled-Components',
                'JavaScript',
                'PHP',
                'REACT',
                'Mongo',
                'Node',
                'MYSQL',
                'GIT',
                'GITHUB',
                'JQUERY'
            ];

            const radiusValue = () => {
                if (window.screen.width <= 778) {
                    radii = 150;
                } else {
                    radii = 290;
                }
                return radii;
            }

            const optiones = {
                radius: radiusValue(),
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            }

            TagCloud(conatiner, texts, optiones)
        }
    }, [])

    return (
        <>
            <div className="container-tags">
                <span className="tagCloud"></span>
            </div>
        </>
    )
}

export default TextTags