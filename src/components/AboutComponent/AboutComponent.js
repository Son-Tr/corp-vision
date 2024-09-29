
import React from "react";
import { about2 } from "../../assets/img/img";
import "./AboutComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faObjectGroup, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

function AboutComponent() {
    return (
        <div id="about">
            <div className="container">
                <div className="flex-about">
                    <div className="about-img-part">
                        <div className="about-img">
                            <img src={about2} alt="about2" />
                            <div className="bg-shape"></div>
                            <div className="img-info-box">
                                <div className="img-info-content">
                                    <p className="img-info-title">
                                        25+
                                    </p>
                                    <p className="img-info-detail">
                                        Years of
                                        <br />
                                        Experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <h5 className="title-small">
                            About our company
                        </h5>
                        <h2 className="title-big">
                            We are the next generation of the business world, creative solutions
                        </h2>
                        <h4 className="h4-content">
                            Over 25 years, We complete every project with extra care as customer needs.
                        </h4>
                        <p className="p-content">
                            We are the next generation of the business world, bringing creative solutions. With over 25 years of experience, we handle each project with the utmost care, ensuring that every customer’s needs are met to the highest standards. Our dedicated team continually strives for excellence, delivering innovative results in a fast-changing marketplace. We prioritize quality, integrity, and long-term success.
                        </p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
                <div className="list-feature">

                    <div className="box-content">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faObjectGroup} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Perfect Design
                            </p>
                            <p className="p-content">
                                Crafted with precision, every element falls into place effortlessly.
                            </p>
                        </div>
                    </div>


                    <div className="box-content">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Carefully Planned
                            </p>
                            <p className="p-content">
                                Every detail is thoughtfully considered, ensuring a solid foundation for success.
                            </p>
                        </div>
                    </div>


                    <div className="box-content">
                        <div className="icon-left">
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                        <div className="content-right">
                            <p className="p-title">
                                Smartly Execute
                            </p>
                            <p className="p-content">
                                Actions are taken with precision, transforming plans into effective results.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutComponent;