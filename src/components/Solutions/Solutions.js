import './Solutions.scss'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Solutions = () => {
    const [isOpen, setIsOpen] = useState(false);

    //handle click open video
    const openVideo = () => {
        setIsOpen(true);
        document.body.classList.toggle('noscroll');// display body scroll which showGallery is in active;
        document.querySelector(".nav-header").style.zIndex = "1"; // header goes behind video
    }

    // handle close video 
    const closeVideo = () => {
        setIsOpen(false);
        document.body.classList.toggle('noscroll');// display body scroll which showGallery is in active;
        document.querySelector(".nav-header").style.zIndex = "3";// back on the start
    }

    return (
        <div className="solutions">
            <div className="container">
                <div className="solutions-content">
                    <h2 className="title-big">
                        We are the next generation of the business world, creative solutions
                    </h2>
                    <p className="p-content">
                        Innovation drives our success, and teamwork helps us reach new heights in business growth and opportunities.
                    </p>
                    <button className="btn-video" onClick={openVideo}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                    {/* AnimatePresence to ensure that the exit will run before component DOM   */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div className="bg-video"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="video">
                                    <span className="close-button" onClick={closeVideo}>&times;</span>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2N247cY2bEw?si=Pgqs4pvgWlaZ3QHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}

export default Solutions;