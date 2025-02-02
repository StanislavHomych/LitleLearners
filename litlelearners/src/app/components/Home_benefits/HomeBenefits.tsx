"use client"
// Data
import { BenefitsData, HomeBenefitsDataForWrapper } from "./HomeBenefitsData";

//React
import React from "react";

// Data
import HomeSectionWrapper from "../Common/HomeSecionWrapper";
import BenefitsInfo from "./BennefitsInfo";

// 3rd party
import { motion } from 'framer-motion';



const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeBenefits: React.FC = () => {
    return (
        <>
            <HomeSectionWrapper homeStatementText={HomeBenefitsDataForWrapper.homeStatementText} heading={HomeBenefitsDataForWrapper.heading} subText={HomeBenefitsDataForWrapper.subText} >
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
            </HomeSectionWrapper>
        </>
    );
};

export default HomeBenefits;
