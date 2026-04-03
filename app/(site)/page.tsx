import { FaqSection } from "@/components/faq-section";
import { HomeContact } from "@/components/home-contact";
import { HomeExperience } from "@/components/home-experience";
import { HomeHero } from "@/components/home-hero";
import { HomeSkills } from "@/components/home-skills";
import { HomeTestimonials } from "@/components/home-testimonials";
import { HomeWork } from "@/components/home-work";

export default function Home() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex flex-1 flex-col outline-none"
    >
      <HomeHero />
      <HomeSkills />
      <HomeExperience />
      <HomeTestimonials />
      <HomeWork />
      <FaqSection />
      <HomeContact />
    </main>
  );
}
