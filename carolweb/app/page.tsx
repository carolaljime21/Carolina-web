import Hero from "@/components/sections/Hero/Hero";
import Experiencia from "@/components/sections/Experiencia/Experiencia";
import Habilidades from "@/components/sections/Habilidades/Habilidades";
import Projects from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experiencia />
      <Habilidades />
      <Projects />
      <Contact />
    </>
  );
}
