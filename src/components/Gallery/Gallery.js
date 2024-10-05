import './Gallery.scss';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { c1, c2, c3, c4, c5, c6 } from '../../assets/img/img';

//import react-image-gallery 
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';



const images = [
    {
        original: c1,
        thumbnail: c1,
    },
    {
        original: c2,
        thumbnail: c2,
    },
    {
        original: c3,
        thumbnail: c3,
    },
    {
        original: c4,
        thumbnail: c4,
    },
    {
        original: c5,
        thumbnail: c5,
    },
    {
        original: c6,
        thumbnail: c6,
    },
];

const Gallery = () => {
    // Manage modal visibility and selected image index
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Open gallery and set selected image
    const openGallery = (index) => {
        setCurrentIndex(index);
        setShowGallery(true);
        document.body.classList.toggle('noscroll');// display body scroll which showGallery is in active;
    };

    // Close gallery
    const closeGallery = () => {
        setShowGallery(false);
        document.body.classList.toggle('noscroll');
    };

    // render photo 
    const renderPhoto = (img, index) => {
        return (
            <div className="photo-item" key={index} onClick={() => openGallery(index)}>
                <img src={img.thumbnail} alt={`Gallery item ${index + 1}`} />

                <div className="hover-overlay"></div>
                <div className="hover-content">
                    <span className="title">
                        Project {index + 1}
                    </span>
                    <span class="content">
                        Quisque ut lectus, eros et, sed commodo risus.
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className='gallery'>
            <div className="container">
                <div className="title">
                    <h5 className="title-small">Our Gallery</h5>
                    <h2 className="title-big">Successful projects we've done</h2>
                </div>

                <div className="gallery-photo">
                    {/* Display images */}
                    {images.map((img, index) => renderPhoto(img, index))}
                </div>

                {/* Conditional rendering for ImageGallery */}
                {showGallery && (

                    <motion.div className="gallery-modal"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <div className='img-box'>
                            <ImageGallery
                                items={images}
                                startIndex={currentIndex}
                                showThumbnails={false}
                            />
                            <span className="close-button" onClick={closeGallery}>&times;</span>
                        </div>
                    </motion.div>

                )}
            </div>
        </div>
    );
};

export default Gallery;
