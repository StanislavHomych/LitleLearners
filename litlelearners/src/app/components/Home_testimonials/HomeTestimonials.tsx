// Components
import HomeSectionWrapper from "../Common/HomeSecionWrapper";
import HomeTestimonialsCarousele from "./HomeTestimonialsCarousele";

// Data
import { HomeTestimonialsDataForWrapper } from "./HomeTestimonialsData";


const HomeTestimonials: React.FC = () => {
    return <>
        <HomeSectionWrapper homeStatementText={HomeTestimonialsDataForWrapper.homeStatementText} heading={HomeTestimonialsDataForWrapper.heading} subText={HomeTestimonialsDataForWrapper.subText}>
            <HomeTestimonialsCarousele />
        </HomeSectionWrapper>
    </>
}

export default HomeTestimonials;