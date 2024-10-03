import React from 'react'
import './Marketing.scss';
import { ab, ab2 } from '../../assets/img/img';

const Marketing = () => {
    return (
        <div className='marketing'>
            <div className="container">
                <div className="flex-marketing">
                    <div className="content-part">
                        <h5 className="title-small">
                            Web design and digital marketing
                        </h5>
                        <h2 className="title-big">
                            We think strategy, UX design, and web development
                        </h2>

                        <div className="flex-digital">
                            <div className="digital-box">
                                <p className="digital">
                                    1200+
                                </p>
                                <p className="p-title">
                                    Happy Clients
                                </p>
                                <p className="p-content">
                                    We help our clients increase profits by increasing their visibility online.
                                </p>
                            </div>
                            <div className="digital-box">
                                <p className="digital">
                                    13k+
                                </p>
                                <p className="p-title">
                                    Completed projects
                                </p>
                                <p className="p-content">
                                    We help our clients increase profits by increasing their visibility online.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="img-part">
                        <img src={ab} alt="ab" />
                    </div>
                    <div className="img-part">
                        <img src={ab2} alt="ab2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing