import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Project } from "@/components/sections/Project";
import { Now } from "@/components/sections/Now";
import { Writing } from "@/components/sections/Writing";
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
        <Writing />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
