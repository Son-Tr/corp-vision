import React, { useState } from "react";
import "./Banner.scss";
import { b1, b2, b3, b4 } from "../../assets/img/img"; // Assuming these are valid imports for the images
//import motion
import { motion } from "framer-motion";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

function Banner() {
    const [activeSlide, setActiveSlide] = useState(0);
    const banners = [
        {
            id: 1,
            title: "We Will Solve Your Issues, Our Vision for Your Future",
            content: "We understand the challenges you face. Every problem, big or small, requires a solution that not only fixes the present but also secures a better future.",
            backgroundImage: b1
        },
        {
            id: 2,
            title: "Embracing success do our best, need best advice",
            content: "Success doesn't happen by chance, it’s built on smart decisions, relentless effort, and expert guidance. ",
            backgroundImage: b2
        },
        {
            id: 3,
            title: "Digital transformation driven by technology",
            content: "We understand that embracing digital change is not just about adopting the latest tools, it’s about fundamentally rethinking how you operate and deliver value.",
            backgroundImage: b3
        },
        {
            id: 4,
            title: "For those who believe in leaving a mark",
            content: "Success is not merely measured by profits but by the impact you have on your community, industry, and the world.",
            backgroundImage: b4
        }
    ];

    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
                onSlideChange={(slide) => setActiveSlide(slide.activeIndex)}  //track slide change
                className="mySwiper"

            >
                {banners.map(({ id, title, content, backgroundImage }, index) => (
                    <SwiperSlide key={id}>
                        <div
                            className="banner-slider"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                            }}
                        >
                            <div className="container">
                                <motion.h1
                                    className="banner-title"
                                    key={activeSlide === index ? id : null} // update base on the active  slide
                                    initial={{ opacity: 0, y: 40 }}  // Start 40px below and invisible
                                    whileInView={{ opacity: 1, y: 0 }} // Move to position and become visible
                                    viewport={{ once: true }}   
                                    transition={{
                                        ease: "easeOut",                // Smooth transition
                                                           // Delay for 0.5 seconds
                                        duration: 0.8,
                                    }}
                                >{title}</motion.h1>
                                <p className="banner-content">{content}</p>
                                <div className="over-play">
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
