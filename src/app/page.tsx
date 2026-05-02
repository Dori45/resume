import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import BackTop from "@/app/components/BackTop";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div>
  <Header/>
    <main>
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <BackTop />
    </main>
    </div>
  );
}