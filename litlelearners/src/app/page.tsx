import HomeBenefits from "./components/Home_benefits/HomeBenefits";
import HomeHero from "./components/Home_hero/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col gap-[80px]">
      <HomeHero />
      <HomeBenefits />
    </div>
  );
}
