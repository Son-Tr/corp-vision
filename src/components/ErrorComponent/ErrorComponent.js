import React from 'react'
import "./ErrorComponent.scss"
import { NavLink } from 'react-router-dom';

const ErrorComponent = () => {
  return (
    <div className='error'>
      <div className="container">
        <div className="error-content">
          <h1 className='error-404'>404</h1>
          <p className="p-error">
            Something's Missing
          </p>
          <p className='p-content'>
            The page you are looking for was moved, removed, renamed or never existed.
          </p>
          <NavLink to="/" >
            <button className="btn">Go Back To Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ErrorComponent;