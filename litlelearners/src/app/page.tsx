// Components
import HomeBenefits from "./components/Home_benefits/HomeBenefits";
import HomeHero from "./components/Home_hero/HomeHero";
import HomeTestimonials from "./components/Home_testimonials/HomeTestimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-[80px]">
      <HomeHero />
      <HomeBenefits />
      <HomeTestimonials />
    </div>
  );
}
