import "./Footer.scss"
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  //get year
  const getyear=()=>{
    let year = new Date().getFullYear();
    return year
  }
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="container">
          <div className="flex-footer-top">
            <div className="footer-logo-part">
              <NavLink className="nav-link-logo" to="/">
                <span className="icon-logo"><FontAwesomeIcon icon={faBarsStaggered} /></span>
                <span className="logo">Corp Vision</span>
              </NavLink>
              <p className="p-content">
                Corp Vision offers design, marketing, and branding services to help businesses grow by enhancing brand visibility and connecting with audiences through innovative strategies.
              </p>
              <div className="list-logo">
                <NavLink to="https://www.linkedin.com/in/sontr/" target='_blank'>
                  <span><FontAwesomeIcon icon={faLinkedin} /></span>
                </NavLink>
                <NavLink to="https://www.facebook.com/" target='_blank'>
                  <span><FontAwesomeIcon icon={faFacebook} /></span>
                </NavLink>
                <NavLink to="https://x.com/home" target='_blank'>
                  <span><FontAwesomeIcon icon={faTwitter} /></span>
                </NavLink>
                <NavLink to="https://www.instagram.com/" target='_blank'>
                  <span><FontAwesomeIcon icon={faInstagram} /></span>
                </NavLink>
              </div>
            </div>
            <div className="footer-contact">
              <NavLink to='/about' target='_blank'>
                <p className="p-title">
                  Contact Info
                </p>
              </NavLink>
              <p className="p-content">
                Address: Corp Vision, S3.01 Vinhomes Grand Park, Thu Duc City, Ho Chi Minh City, Vietnam
              </p>
              <p className="p-content">
                Phone Number: <NavLink to='tel:+84 404-11-22-89'>+84 404-11-22-89</NavLink>
              </p>
              <p className="p-content">
                Email: <NavLink to='mailto:info@example.com'>info@example.com</NavLink>
              </p>
              <p className="p-content">
                Support: <NavLink to='mailto:info@example.com'>info@support.com</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className='p-content'>&copy; {getyear()} Corp Vision All Rights Reserved | Design by W3Layouts | Built by <NavLink to="https://github.com/Son-Tr" target='_blank'>Son Tran</NavLink></p>
      </div>
    </div>
  )
}

export default Footer