import React from 'react';
import "./OurSuccess.scss"
import { about } from '../../assets/img/img';

const OurSuccess = () => {
  return (
    <div className='success'>
      <div className="container">
        <div className="flex-success">
          <div className="img-part">
            <img src={about} alt="about" />
          </div>
          <div className="content-part">
            <h5 className="title-small">
              Your success is our success
            </h5>
            <h2 className="title-big">
              Web design, marketing & SEO solutions that get results
            </h2>
            <div className="progress-box ">
              <p className='progress-title box-1'>
                <span className='job'>Marketing</span>
                <span className='percent'>80%</span>
              </p>
              <div className="progress">
                <div className="progress-bar box-1"></div>
              </div>
            </div>
            <div className="progress-box ">
              <p className='progress-title  box-2'>
                <span className='job'>Web design</span>
                <span className='percent'>95%</span>
              </p>
              <div className="progress">
                <div className="progress-bar box-2"></div>
              </div>
            </div>
            <div className="progress-box ">
              <p className='progress-title box-3' >
                <span className='job'>Analytics</span>
                <span className='percent'>60%</span>
              </p>
              <div className="progress">
                <div className="progress-bar box-3"></div>
              </div>
            </div>
            <div className="progress-box ">
              <p className='progress-title box-4'>
                <span className='job'>Web Development</span>
                <span className='percent'>90%</span>
              </p>
              <div className="progress">
                <div className="progress-bar box-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurSuccess