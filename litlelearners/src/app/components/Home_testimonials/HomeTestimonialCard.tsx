// Types
import { HomeTestimonials } from "@/app/types/Components/Testimonials";

// Icons
import Star from "@/app/icons/Star";

// React
import React from "react";


const HomeTestimonialCard: React.FC<HomeTestimonials> = ({
    PersonIcon,
    personName,
    rating,
    testimonialText,
}) => {

    return <div className="bg-slate-50 shadow-blackFull rounded-lg py-4 px-6 gap-2  border border-gray-950 flex flex-col items-center m-2">
        <div><PersonIcon /></div>
        <div className="font-semibold">{personName}</div>
        <div className="flex">   {Array.from({ length: rating }).map((_, index) => (
            <React.Fragment key={index}>
                <Star />
            </React.Fragment>
        ))}</div>
        <div>{testimonialText}</div>
    </div>
}

export default HomeTestimonialCard;