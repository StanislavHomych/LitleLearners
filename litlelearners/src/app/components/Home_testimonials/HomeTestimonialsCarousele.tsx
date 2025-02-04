"use client"

// 3rd party
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';

// Data
import { testimonials } from './HomeTestimonialsData';

// Components
import HomeTestimonialCard from './HomeTestimonialCard';

// Types
import { HomeTestimonials } from '@/app/types/Components/Testimonials';

const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const HomeTestimonialsCarousele: React.FC = () => {
    return (
        <div className="carousel-container">
            <Swiper
                className="mySwiper2"
                spaceBetween={30}
                loop
                slidesPerView={"auto"}
                centeredSlides={true}
            >
                {testimonials.map((item: HomeTestimonials) => (
                    <SwiperSlide key={item.id} className="carousel-slide">
                        <motion.div
                            variants={animationVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <HomeTestimonialCard
                                PersonIcon={item.PersonIcon}
                                personName={item.personName}
                                rating={item.rating}
                                testimonialText={item.testimonialText}
                            />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HomeTestimonialsCarousele;
