import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContentShowcase from "./ContentShowcase";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContentShowcase />
      <ContactSection />
      <Footer />
    </>
  );
}
