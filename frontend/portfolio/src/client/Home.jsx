import React from 'react'
import sadin from '../assets/images/sadin.jpg'
import './home.css'

function Main() {
    return (
        <>
            <div className="first-section">
                <div className="first-section-item ">
                    <h1 >Welcome To</h1>
                    <h2 className='ml-5'><span>Rokib</span> Ahmed</h2>
                </div>
                <div className="first-section-item">
                    <img src={sadin} alt="my pic" className='mypic'/>
                </div>
            </div>
            <div className="first-section">
                <div className="first-section-item">
                    <img src={sadin} alt="my pic" className='mypic ml-5' />
                </div>
                <div className="first-section-item">
                    <h1>Welcome To</h1>
                    <h2 className='ml-5'><span>Rokib</span> Ahmed</h2>
                </div>
            </div>
        </>
    )
}

export default Main
