"use client"
// Components
import CommonStatement from "../Common/CommonStatement";
import BenefitsInfo from "./BennefitsInfo";

// Icons
import HatIcon from "@/app/icons/HatIcon";
import BuoyIcon from "@/app/icons/BuoyIcon";
import CrownIcon from "@/app/icons/CrownIcon";
import FlagIcon from "@/app/icons/FlagIcon";
import MaskIcon from "@/app/icons/MaskIcon";
import PeoplesIcon from "@/app/icons/PeoplesIcon";

//React 
import React from "react";

const BenefitsData = [
    {
        id: 1,
        heading: "Holistic Learning Approach",
        text: "Our curriculum focuses on nurturing cognitive, social, emotional,  ensuring a well-rounded education.",
        icon: HatIcon
    },
    {
        id: 2,
        heading: "Experienced Educators",
        text: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
        icon: CrownIcon
    },
    {
        id: 3,
        heading: "Nurturing Environment",
        text: "We prioritize safety and provide a warm and caring atmosphere for every child.",
        icon: MaskIcon
    },
    {
        id: 4,
        heading: "Play-Based Learning",
        text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
        icon: FlagIcon
    },
    {
        id: 5,
        heading: "Individualized Attention",
        text: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
        icon: BuoyIcon
    },
    {
        id: 6,
        heading: "Parent Involvement",
        text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
        icon: PeoplesIcon
    },

]
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeBenefits: React.FC = () => {
    return (
        <div className="flex w-full justify-center items-center flex-col">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>
                <CommonStatement title="Children Deserve Bright Future" />
            </motion.div>

            <motion.h2
                className="text-xl font-semibold mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
            >
                Our Benefits
            </motion.h2>

            <motion.p
                className="text-xs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
            >
                With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future.
            </motion.p>

            <div className="mt-16 grid grid-cols-1 grid-rows-6 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-y-14 gap-x-8">
                {BenefitsData.map((item) => (
                    <motion.div
                        key={item.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <BenefitsInfo Icon={item.icon} heading={item.heading} text={item.text} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HomeBenefits;
