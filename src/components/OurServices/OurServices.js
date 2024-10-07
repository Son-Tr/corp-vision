import React from 'react'
import "./OurServices.scss"
import { icon1, icon2, s1, s2 } from '../../assets/img/img'

const OurServices = () => {
    return (
        <div className='services'>
            <div className="container">
                <div className="services-title">
                    <p className="title-small">
                        Check our services
                    </p>
                    <h3 className="title-big">
                        Introduce our best and reliable services for all your business
                    </h3>
                </div>
                <div className="services-list-box">
                    <div className="services-box services-content">
                        <img src={icon1} alt="icon1" />
                        <h3>
                            Product Design
                        </h3>
                        <p className="p-content">
                            Product design blends user needs with business goals, creating innovative products through research, strategy, and creativity.
                        </p>
                        <button className="btn">
                            Know More
                        </button>
                    </div>
                    <div className="services-box">
                        <img className='img-box' src={s1} alt="s1" />
                    </div>
                    <div className="services-box">
                        <img className='img-box' src={s2} alt="s2" />

                    </div>
                    <div className="services-box services-content">
                        <img src={icon2} alt="icon2" />
                        <h3>
                            E-commerce Design
                        </h3>
                        <p className="p-content">
                            E-commerce design blends user experience with business goals, creating engaging online stores through research, strategy, and creativity.
                        </p>
                        <button className="btn">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices