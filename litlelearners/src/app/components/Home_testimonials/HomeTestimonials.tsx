// Components
import HomeSectionWrapper from "../Common/HomeSecionWrapper";
import HomeTestimonialsCarousele from "./HomeTestimonialsCarousele";

// Data
import { HomeTestimonialsDataForWrapper } from "./HomeTestimonialsData";


const HomeTestimonials: React.FC = () => {
    return <>
        <HomeSectionWrapper homeStatementText={HomeTestimonialsDataForWrapper.homeStatementText} heading={HomeTestimonialsDataForWrapper.heading} subText={HomeTestimonialsDataForWrapper.subText}>
            <div className="mt-12 w-[100%]">
                <HomeTestimonialsCarousele />
            </div>
        </HomeSectionWrapper>
    </>
}

export default HomeTestimonials;