"use client"
// Types
import { HomeSectionWrapperProps } from "@/app/types/Components/Common";

// 3rd party
import { motion } from "framer-motion"

// Components
import CommonStatement from "./CommonStatement";


const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const HomeSectionWrapper: React.FC<HomeSectionWrapperProps> = ({ homeStatementText, heading, subText, children }) => {
    return <div className="flex w-full justify-center items-center flex-col">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>
            <CommonStatement title={homeStatementText} />
        </motion.div>
        <motion.h2
            className="text-xl font-semibold mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
        >
            {heading}
        </motion.h2>
        <motion.p
            className="text-xs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
        >
            {subText}
        </motion.p>
        {children}
    </div>
}

export default HomeSectionWrapper;