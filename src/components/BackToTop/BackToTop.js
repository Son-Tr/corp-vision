import "./BackToTop.scss"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    // handle event scrollY to display back to top btn
    useEffect(() => {
        const visibleDisplay = () => {
            setVisible(window.scrollY > 500)// check true or false for visible
        }

        window.addEventListener("scroll", visibleDisplay);

        return () => {
            window.removeEventListener("scroll", visibleDisplay);
        }
    }, [])

    // function back to top
    const backToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <AnimatePresence>
                {visible &&
                    <motion.span onClick={backToTop} className='back-to-top'
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        transition={{
                            duration: 0.3   ,
                             ease: "easeInOut",
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowUp} />
                    </motion.span>}
            </AnimatePresence>
        </>
    )
}

export default BackToTop