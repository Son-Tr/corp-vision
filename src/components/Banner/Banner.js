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
        <div>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                modules={[EffectFade, Navigation]}
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
        </div>
    );
}

export default Banner;


