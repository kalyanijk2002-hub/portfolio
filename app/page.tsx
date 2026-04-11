// page.tsx — Root page: single-scroll layout composing all sections.
// Each section component handles its own reveal animation internally.

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      {/* Sticky navigation — rendered above all sections */}
      <Navbar />

      <main>
        {/* 1. Hero — full-screen opening */}
        <Hero />

        {/* 2. About — professional summary + quick facts */}
        <About />

        {/* 3. Education — timeline of qualifications */}
        <Education />

        {/* 4. Experience — work history cards */}
        <Experience />

        {/* 5. Skills — grouped competency badges */}
        <Skills />

        {/* 6. Certifications — professional certificates */}
        <Certifications />

        {/* 7. Volunteer — community service */}
        <Volunteer />

        {/* 8. Contact — mailto form + direct links */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
