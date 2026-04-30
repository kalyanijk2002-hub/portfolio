"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Navbar activeTab={activeTab} onTab={setActiveTab} />
      <main className="pt-20">
        <div
          key={activeTab}
          style={{ animation: "tab-enter 0.45s cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          {activeTab === "home"           && <Hero />}
          {activeTab === "about"          && <About />}
          {activeTab === "education"      && <Education />}
          {activeTab === "experience"     && <Experience />}
          {activeTab === "projects"       && <><Projects /><Certifications /></>}
          {activeTab === "contact"        && <Contact />}
        </div>
      </main>
      <Footer />
    </>
  );
}
