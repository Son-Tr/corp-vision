import React from 'react'
import './ContactUs.scss'
import Map from './Map'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import FormInput from './FormInput'
import { NavLink } from 'react-router-dom'


const ContactUs = () => {
    return (
        <div className='contact-us'>
            <div className="container">
                <div className="adress">
                    <div className="adress-title">
                        <h2 className="title-big">
                            We are a full-service creative agency

                        </h2>
                        <p className="p-content">
                            A full-service creative agency provides various services like design, marketing, and branding to help businesses promote their products or services effectively.
                        </p>
                    </div>
                    <div className="adress-list-box">
                        <div className="adress-box">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faMap} />
                            </div>
                            <div className="text-box">
                                <h3>
                                    Our Location
                                </h3>
                                <p className='p-content'>Corp Vision, S3.01 Vinhomes Grand Park, Thu Duc City, Ho Chi Minh City, Vietnam</p>
                            </div>
                        </div>
                        <div className="adress-box">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="text-box">
                                <h3>
                                    Give us a call
                                </h3>
                                <NavLink className='p-content' to='tel:+84 404-11-22-89'>
                                    +84 404-11-22-89
                                </NavLink>
                                <NavLink className='p-content' to='tel:+84 404-11-22-99'>
                                    +84 404-11-22-99
                                </NavLink>
                            </div>
                        </div>
                        <div className="adress-box">
                            <div className="icon-box">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="text-box">
                                <h3>
                                    Help Desk
                                </h3>
                                <NavLink className='p-content' to='mailto:info@example.com'>
                                    info@example.com
                                </NavLink>
                                <NavLink className='p-content' to='mailto:info@example.com'>
                                    info@support.com
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Map />
                <FormInput />
            </div>
        </div>
    )
}

export default ContactUs