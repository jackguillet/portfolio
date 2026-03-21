import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Project } from "@/components/sections/Project";
import { Now } from "@/components/sections/Now";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Project />
        <Now />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
