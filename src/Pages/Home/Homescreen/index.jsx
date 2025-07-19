import React, { useState } from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import PrivacyPolicy from "../../PrivacyPolicy";
import TermsOfService from "../../TermsOfService";
import CookiePolicy from "../../CookiePolicy";

function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <AboutMe />
      <Testimonials />
      <ContactMe />
      <Footer openModal={openModal} />
      
      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            {activeModal === 'privacy' && <PrivacyPolicy />}
            {activeModal === 'terms' && <TermsOfService />}
            {activeModal === 'cookies' && <CookiePolicy />}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
