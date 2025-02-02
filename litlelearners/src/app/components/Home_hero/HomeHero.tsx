
"use client"
// 3rd party
import { motion } from 'framer-motion';

// Next
import Image from "next/image";

const HomeHero: React.FC = () => {
    return (
        <div className="pt-[50px] flex flex-col items-center lg:flex-row">
            <div className="order-2 lg:order-1 w-full lg:w-3/5 sm:w-full lg:pr-8 flex flex-col justify-center">
                <motion.h3
                    className="underline text-xs sm:text-base  font-medium sm:mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to Little Learners Academy
                </motion.h3>

                <motion.h1
                    className="text-base leading-[30px] lg:text-xl md:text-lg  font-extrabold lg:leading-[60px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Where Young Minds Blossom and <span className="text-orange-65">Dreams take Flight</span>
                </motion.h1>

                <motion.h6
                    className="text-2sm font-medium mt-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                >
                    Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
                </motion.h6>

                <motion.div
                    className="flex flex-col sm:flex-row items-center text-center gap-5 bg-orange-95 border  border-gray-950 rounded-xl py-[10px] px-[40px] lg:w-4/6 justify-between mt-5 shadow-orangeFull"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <div className="flex flex-col border-b border-b-gray-950 sm:border-b-0">
                        <span className="text-xs lg:text-lg md:tex-base font-extrabold">+7000</span>
                        <span className="text-xxs">Students Passed Out</span>
                    </div>
                    <div className="flex flex-col border-b border-b-gray-950 sm:border-b-0">
                        <span className="text-xs lg:text-lg md:tex-base font-extrabold">+37</span>
                        <span className="text-xxs">Awards & Recognitions</span>
                    </div>
                    <div className="flex flex-col border-b border-b-gray-950 sm:border-b-0">
                        <span className="text-xs lg:text-lg md:tex-base font-extrabold">+15</span>
                        <span className="text-xxs">Experience Educators</span>
                    </div>
                </motion.div>
            </div>

            <div className="order-1  lg:order-2 w-full sm:w-3/5  lg:w-2/5 flex justify-center items-center bg-orange-75 rounded-sm max-w-[600px] p-[5px] relative ">
                <div className='border border-gray-950'>
                    <div className='w-[20px]  absolute top-[-5px] left-[-5px] '>
                        <div className='before:block before:w-[20px] before:h-[20px] before:border before:border-gray-950 before:bg-white before:rounded-full'></div>
                    </div>
                    <div className='w-[20px]  absolute top-[-5px] right-[-5px] '>
                        <div className='before:block before:w-[20px] before:h-[20px] before:border before:border-gray-950 before:bg-white before:rounded-full'></div>
                    </div>
                    <div className='w-[20px]  absolute bottom-[-5px] left-[-5px] '>
                        <div className='before:block before:w-[20px] before:h-[20px] before:border before:border-gray-950 before:bg-white before:rounded-full'></div>
                    </div>
                    <div className='w-[20px]  absolute bottom-[-5px] right-[-5px] '>
                        <div className='before:block before:w-[20px] before:h-[20px] before:border before:border-gray-950 before:bg-white before:rounded-full'></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                    >
                        <Image src="/assets/images/Hero.png" alt="hero" width={400} height={400} className="w-full rounded-sm " />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
