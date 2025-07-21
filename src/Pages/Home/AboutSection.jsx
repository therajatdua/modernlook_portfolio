import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const skills = [
    { name: 'React', level: 60, color: '#61DAFB' },
    { name: 'Node.js', level: 55, color: '#68A063' },
    { name: 'JavaScript', level: 75, color: '#F7DF1E' },
    { name: 'Python', level: 80, color: '#3776AB' },
    { name: 'Video Editing', level: 90, color: '#FF6B35' },
    { name: 'Firebase', level: 75, color: '#FFCA28' },
    { name: 'Content Creation', level: 95, color: '#8B5CF6' }
  ];

  const achievements = [
    {
      icon: '🎥',
      title: '100+ YouTube Videos',
      description: 'Creating tech and lifestyle content'
    },
    {
      icon: '💻',
      title: '1+ Projects',
      description: 'Full-stack web applications'
    },
    {
      icon: '🏆',
      title: '3+ Years',
      description: 'Development experience'
    },
    {
      icon: '📱',
      title: 'Social Media',
      description: 'Growing digital presence'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        <div className={`about-image ${isVisible ? 'animate' : ''}`}>
          <div className="about-image-wrapper">
            <img 
              src="./img/about-me.png" 
              alt="Rajat Dua - About Me"
              loading="lazy"
            />
            <div className="floating-skills">
              {skills.slice(0, 6).map((skill, index) => (
                <div 
                  key={skill.name}
                  className="floating-skill"
                  style={{
                    '--delay': `${index * 0.2}s`,
                    '--color': skill.color
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`about-content ${isVisible ? 'animate' : ''}`}>
          <div className="section-badge">
            <span>👋</span>
            Get to know me
          </div>
          
          <h2 className="heading-xl">
            Bridging <span className="gradient-text">Code</span> and 
            <span className="gradient-text-accent"> Creativity</span>
          </h2>
          
          <div className="about-story">
            <p className="text-lg">
              Hey there! I'm Rajat, a passionate full-stack developer and digital content creator 
              based in India. My journey began with curiosity about how things work on the web, 
              and it evolved into a love for both building applications and sharing knowledge.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you'll find me creating content for my YouTube channel, 
              editing videos, or exploring new technologies. I believe in the power of 
              storytelling - whether through code or through the content I create.
            </p>
            
            <p className="text-lg">
              My goal is to build products that make a difference while inspiring others 
              through my content creation journey.
            </p>
          </div>
          
          <div className="skills-grid">
            <h3 className="heading-md">Skills & Expertise</h3>
            <div className="skill-bars">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-bar"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-fill"
                      style={{
                        '--width': `${skill.level}%`,
                        '--color': skill.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="achievement-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="about-actions">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            
            <a 
              href="https://www.youtube.com/@rajatxdua"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Watch My Content
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
