import React from "react"
import './index.scss'

export const RenderCard = ({ portfolio }) => {
    return (
        <div className='images-container'>
            {
                portfolio.map((port, idx) => (
                    <div key={idx} className='images-box'>
                        <img src={port.cover} alt={port.title} className='portfolio-image' />
                        <div className='content'>
                            <p className='title'>{port.title}</p>
                            <h4 className='description'>{port.tecnologis}</h4>
                            <button
                                className='btn'
                                onClick={() => window.open(port?.web)}
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
                ))
            }
        </div>
    )
}