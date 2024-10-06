import React from 'react'
import './ContactUs.scss'

const input = [
    {
        type: "text",
        placeholder: "Name",
    },
    {
        type: "number",
        placeholder: "Your Phone Number",

    },
    {
        type: "email",
        placeholder: "Email*",

    },
    {
        type: "text",
        placeholder: "Subject",
    },
]

const FormInput = () => {
    return (
        <div className='form-container'>
            <div className="form-title">
                <h2 className="title-big">
                    Let’s talk about your project
                </h2>
                <p className="p-content">
                    We have made it easy for clients to reach us and get their solutions weaved
                </p>
            </div>
            <form className="form-input" >
                {input.map(({ type, placeholder }, index) => {
                    return (
                        <input
                            className='input'
                            key={index}
                            type={type}
                            required
                            placeholder={placeholder} />
                    )
                })}
                <textarea
                    className='input'
                    placeholder='Message*'>
                </textarea>
                <div className="button">
                    <button className='btn' type='submit'>
                        Submit Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormInput