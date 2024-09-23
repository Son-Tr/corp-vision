import React from "react";
import "./Banner.scss"
import { b1,b2 } from "../../assets/img/img";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
function Banner() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[EffectFade, Navigation, Pagination,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={b1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={b2} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Banner;
