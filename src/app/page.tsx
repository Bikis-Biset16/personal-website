import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const { sections } = siteConfig;

  return (
    <>
      {sections.hero && <Hero />}
      {sections.about && <About />}
      {sections.skills && <Skills />}
      {sections.projects && <Projects />}
      {sections.experience && <Experience />}
      {sections.contact && <Contact />}
    </>
  );
}
