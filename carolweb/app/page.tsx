import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import Projects from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
