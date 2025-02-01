// 3rd party
import { motion } from "framer-motion";

const menuVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
};

const NavigationSm: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <motion.div
            className="bg-white flex border border-gray-950 border-t-0 rounded-b-lg overflow-hidden md:hidden"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={menuVariants}
        >
            <motion.div className="w-full cursor-pointer">
                {["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"].map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-2 border border-b-gray-950 last:border-b-0 border-t-0 border-x-0 hover:bg-orange-75"
                        variants={itemVariants}
                    >
                        <span>{item}</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default NavigationSm;
