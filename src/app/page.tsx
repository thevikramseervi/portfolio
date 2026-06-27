import { Container } from "@/components/layout/container";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { CompetitiveProgramming } from "@/components/sections/competitive-programming";
import { Certifications } from "@/components/sections/certifications";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <CompetitiveProgramming />
      <Certifications />
      <Achievements />
      <Contact />
    </Container>
  );
}
