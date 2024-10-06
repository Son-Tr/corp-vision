
import React from "react";
import "./Industries.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCopy } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faCode, faFileContract, faMoneyBill } from "@fortawesome/free-solid-svg-icons";


const Industries = () => {
    return (
        <div className="industry">
            <div className="container">
                <div className="title">
                    <h5 className="title-small">
                        Beautifully crafted creative solutions
                    </h5>
                    <h2 className="title-big">
                        What industries we serve?
                    </h2>
                </div>
                <div className="industry-list-box">
                    <div className="box">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faMoneyBill} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Investment Planning
                            </p>
                            <p className="p-content">
                                Allocate assets wisely for future financial growth and security.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faFileContract} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Commercial Projects
                            </p>
                            <p className="p-content">
                                Develop large-scale ventures for profit, managing risks and returns.
                            </p>
                        </div>
                    </div> <div className="box">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Banking & Finance
                            </p>
                            <p className="p-content">
                                Manage money, loans, and credit to support economic growth and stability.
                            </p>
                        </div>
                    </div> <div className="box">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faCopy} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Competitive Research
                            </p>
                            <p className="p-content">
                                Analyze competitors to identify advantages and refine business strategy.
                            </p>
                        </div>
                    </div> <div className="box">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                International Business
                            </p>
                            <p className="p-content">
                                Expand operations globally, navigating regulations and market differences.
                            </p>
                        </div>
                    </div> <div className="box">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Strategic Approach
                            </p>
                            <p className="p-content">
                                Plan long-term goals, optimizing resources for sustained market advantage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries;