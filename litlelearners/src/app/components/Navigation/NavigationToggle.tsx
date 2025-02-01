"use client"

// Redux
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "@/app/redux/features/MenuSlice";

// 3rd party
import { motion } from "framer-motion";

// Icons
import ArrowUp from "@/app/icons/ArrowUp";



const NavigationToggle: React.FC = () => {

    const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen)
    const dispatch = useDispatch();

    console.log(isMenuOpen)
    return <div className="flex md:hidden">
        <div onClick={() => dispatch(openMenu())} className="border-l border-l-gray-900 p-4 flex items-center hover:bg-orange-75 cursor-pointer ">
            <motion.div
                animate={{
                    rotate: isMenuOpen ? 0 : 180,
                }}
                transition={{
                    type: "tween",
                    stiffness: 300,
                    damping: 30,
                }}
            >
                <ArrowUp />
            </motion.div>

        </div>
    </div>
}

export default NavigationToggle