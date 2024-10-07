import React from 'react'
import './WorkTogether.scss'
import { NavLink } from 'react-router-dom'


const WorkTogether = () => {
    return (
        <div className='work-together'>
            <div className="container">
                <div className="flex-work-together">
                    <div className="title-part">
                        <h3 className="title-big">
                            Let's talk about your project and see how we can work together
                        </h3>
                        <p className="p-content">
                            Let’s discuss your project to explore how we can collaborate effectively and achieve your business goals.
                        </p>
                    </div>
                    <div className="btn-part">
                        <NavLink to="/contact">
                            <button className='btn'>Get Started On An Project</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTogether