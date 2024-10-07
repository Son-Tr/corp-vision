import React from 'react'
import "./ChooseUs.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faChartLine, faGears, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'

const ChooseUs = () => {
    return (
        <div className='choose-us'>
            <div className="container">
                <div className="choose-us-title">
                    <p className="title-small">
                        Why choose us
                    </p>
                    <h2 className="title-big">
                        People choose us because we serve the best for everyone
                    </h2>
                </div>
                <div className="list-box">
                    <div className="choose-us-box">
                        <div className="icon-box">
                            <span className='color-1'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </span>
                        </div>
                        <div className="content-box">
                            <p className="p-title">
                                Planning your business
                            </p>
                            <p className="p-content">
                                Plan your business with strategy, market analysis, and resource management for success.
                            </p>
                        </div>
                    </div>
                    <div className="choose-us-box">
                        <div className="icon-box">
                            <span className='color-2'>
                                <FontAwesomeIcon icon={faGears} />
                            </span>
                        </div>
                        <div className="content-box">
                            <p className="p-title">
                                Create business process
                            </p>
                            <p className="p-content">
                                Create a business process by defining, mapping, assigning, implementing, and optimizing.
                            </p>
                        </div>
                    </div>
                    <div className="choose-us-box">
                        <div className="icon-box">
                            <span className='color-3'>
                                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                            </span>
                        </div>
                        <div className="content-box">
                            <p className="p-title">
                                Doing research for your clients
                            </p>
                            <p className="p-content">
                                Research for clients: gather data, analyze trends, and provide insights for decisions.
                            </p>
                        </div>
                    </div>
                    <div className="choose-us-box">
                        <div className="icon-box">
                            <span className='color-4'>
                                <FontAwesomeIcon icon={faChartLine} />
                            </span>
                        </div>
                        <div className="content-box">
                            <p className="p-title">
                                We make the best strategies
                            </p>
                            <p className="p-content">
                                Analyze data, understand needs, and implement innovative solutions for best strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs