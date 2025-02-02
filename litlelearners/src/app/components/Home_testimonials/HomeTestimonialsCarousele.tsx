"use client"
// 3rd party
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const HomeTestimonialsCarousele: React.FC = () => {
    return <div className="mt-12 w-full">
        <Swiper
            modules={[Navigation]}
            spaceBetween={"30px"}
            slidesPerView={3}
            navigation
            loop
        >
            <SwiperSlide className=''>Відгук 1</SwiperSlide>
            <SwiperSlide>Відгук 2</SwiperSlide>
            <SwiperSlide>Відгук 3</SwiperSlide>
            <SwiperSlide>Відгук 1</SwiperSlide>
            <SwiperSlide>Відгук 2</SwiperSlide>
            <SwiperSlide>Відгук 3</SwiperSlide>
        </Swiper>
    </div>
}

export default HomeTestimonialsCarousele;