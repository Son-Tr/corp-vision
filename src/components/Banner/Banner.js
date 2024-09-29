import React, { useState } from "react";
import "./Banner.scss";
import 'animate.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { banners } from "../../assets/data/dataJson";

function Banner() {
    const [activeSlide, setActiveSlide] = useState(0);
    
    return (
        <div className="banner-wrap">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
                onSlideChange={(slide)=>setActiveSlide(slide.activeIndex)}// track slide change.
            >
                {banners.map(({ id, title, content, backgroundImage, classNameTitle, classNameContent,btn },index) => (
                    <SwiperSlide key={id}>
                        <div
                            className="banner-slider"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                            }}
                        >
                            {/* add class animation to each slide when it becomes visible to the user */}
                            <div className="container">
                                <h1
                                    className={`banner-title animate__animated animate__delay-1s animate__fast ${activeSlide === index ? classNameTitle : ''}`}
                                >{title}</h1>

                                <p
                                   className={`banner-content animate__animated ${activeSlide === index ? classNameContent : ''}`}
                                >{content}</p>

                                <button
                                className={`btn animate__animated animate__delay-1s ${activeSlide === index ? btn : ''}`}
                                >Learn More</button>
                                <div className="over-play"></div>
                            </div>
                           
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                    <path fillOpacity={1}>
                        <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
    M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;" />
                    </path>
                </svg>
            </div>
        </div>
    );
}

export default Banner;


