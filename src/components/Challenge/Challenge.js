import React from 'react'
import './Challenge.scss'
import { icon1, icon2, icon3, icon4 } from '../../assets/img/img'

const Challenge = () => {
    return (
        <div className='challenge'>
            <div className="container">
                <div className="challenge-wrap">
                    <div className="challenge-content">
                        <h5 className="title-small">
                            Every day brings new challenges
                        </h5>
                        <h2 className="title-big">
                            Creative agency focused on vision, product and people
                        </h2>
                        <p className="p-content">
                            A creative agency focused on vision, product, and people fosters innovation and user-centered design. Aligning with clients' goals, they create visionary strategies, user-friendly products, and meaningful connections. Their approach blends creativity and collaboration, delivering impactful solutions for brand growth.
                        </p>
                        <button className="btn">
                            Discover More
                        </button>
                    </div>
                    <div className="challenge-list-box">
                        <div className="challenge-box">
                            <div className="icon">
                                <img src={icon1} alt="icon" />
                            </div>
                            <p className="p-title">
                                Our Process
                            </p>
                        </div>
                        <div className="challenge-box">
                            <div className="icon">
                                <img src={icon2} alt="icon2" />
                            </div>
                            <p className="p-title">
                                How We Help
                            </p>
                        </div>
                        <div className="challenge-box">
                            <div className="icon">
                                <img src={icon3} alt="icon3" />
                            </div>
                            <p className="p-title">
                                UI/UX Design
                            </p>
                        </div>
                        <div className="challenge-box">
                            <div className="icon">
                                <img src={icon4} alt="icon4" />
                            </div>
                            <p className="p-title">
                                Creative Ideas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Challenge