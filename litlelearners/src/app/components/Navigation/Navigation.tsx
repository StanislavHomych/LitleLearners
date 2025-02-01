"use client"

// Icons
import Logo from "../../icons/Logo";

// Components
import NavigationSm from "./NavigationSm";
import NavigationToggle from "./NavigationToggle";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Navigation: React.FC = () => {

    const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen)

    return <div className={`relative  ${isMenuOpen ? " " : "overflow-hidden"}`}>

        <nav className={`flex justify-between border border-gray-950 rounded-lg bg-white overflow-hidden ${isMenuOpen ? "rounded-b-none md:rounded-lg " : ""} `}>
            <div className={`flex items-center gap-2 p-4 bg-orange-65 border-r border-gray-950  ${isMenuOpen ? "rounded-b-none " : ""}`}>
                <Logo />
                <span>Little Learners</span>
            </div>
            <ul className="hidden md:flex ">
                <li className="border-l border-gray-950 p-4 bg-orange-95 hover:bg-orange-75 cursor-pointer flex items-center"><span>Home</span></li>
                <li className="border-l border-gray-950 p-4 hover:bg-orange-75 cursor-pointer flex items-center" ><span>About Us</span></li>
                <li className="border-l border-gray-950 p-4 hover:bg-orange-75 cursor-pointer flex items-center"><span>Academics</span></li>
                <li className="border-l border-gray-950 p-4 hover:bg-orange-75 cursor-pointer flex items-center"><span>Admissions</span></li>
                <li className="border-l border-gray-950 p-4 hover:bg-orange-75 cursor-pointer flex items-center"><span>Student Life</span></li>
                <li className="border-l border-gray-950 p-4 hover:bg-orange-75 cursor-pointer rounded-r-md flex items-center "><span>Contact</span></li>
            </ul>
            <NavigationToggle />
        </nav>
        <nav className=" absolute w-full top-[100%] ">
            <NavigationSm isOpen={isMenuOpen} />
        </nav>
    </div>

}


export default Navigation;
