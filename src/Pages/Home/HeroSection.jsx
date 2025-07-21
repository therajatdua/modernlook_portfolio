import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Developer', 'Creator', 'Storyteller'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀</span>
            Available for new opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Rajat Dua</span>
            <br />
            <div className="role-switcher">
              {roles.map((role, index) => (
                <span 
                  key={role}
                  className={`role-text gradient-text-accent ${index === currentRole ? 'active' : ''}`}
                  style={{
                    opacity: index === currentRole ? 1 : 0,
                    transform: `translateY(${index === currentRole ? '0' : '100%'})`
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </h1>
          
          <p className="hero-subtitle">
            I'm a full-stack developer and digital content creator who builds innovative web applications 
            and creates engaging content that inspires and entertains. Currently crafting digital experiences 
            and sharing my journey through code and storytelling.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            <button 
              className="btn btn-secondary btn-lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number gradient-text">100+</div>
              <div className="stat-label">YouTube Videos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number gradient-text">1+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number gradient-text">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img 
              src="./img/hero_img.png" 
              alt="Rajat Dua - Developer and Content Creator"
              className="hero-profile-img"
              loading="eager"
            />
            <div className="hero-bg-elements">
              <div className="bg-element bg-element-1"></div>
              <div className="bg-element bg-element-2"></div>
              <div className="bg-element bg-element-3"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <button 
          className="scroll-btn"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
