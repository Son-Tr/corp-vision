import React from 'react'
import "./GetEmail.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'


const GetEmail = () => {
    return (
        <div className='get-email'>
            <div className="container">
                <div className="get-email-title">
                    <h2 className="title-big">
                        Let’s find out how to work together
                    </h2>
                    <p className="p-content">
                        We can explore exciting opportunities to collaborate, leveraging our strengths and expertise to achieve success.
                    </p>
                </div>
                <form className="group-input">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <input
                        type="email"
                        name='email'
                        placeholder='Your Email Address'
                        required />
                    <button className='btn'>Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default GetEmail