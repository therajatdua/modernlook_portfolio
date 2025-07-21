import React, { useState, useEffect, useRef } from 'react';
import data from "../../data/index.json";

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const categories = ['all', 'web', 'mobile', 'content'];
  
  const projectsWithCategories = data?.portfolio?.map(project => ({
    ...project,
    category: project.title.includes('MemoVault') ? 'web' : 
             project.title.includes('Rajat Dua') ? 'content' : 
             project.title.includes('TechWelt') ? 'content' : 'web'
  })) || [];

  const filteredProjects = filter === 'all' 
    ? projectsWithCategories.filter(project => project.category === 'web' || project.category === 'mobile')
    : projectsWithCategories.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTechStack = (title) => {
    if (title.includes('MemoVault')) {
      return ['React', 'Firebase', 'Tailwind', 'AI/ML', 'Voice API'];
    } else if (title.includes('Rajat Dua')) {
      return ['Video Editing', 'Content Creation', 'YouTube', 'Storytelling'];
    } else if (title.includes('TechWelt')) {
      return ['Tech Videos', 'Content Creation', 'YouTube'];}
    return ['React', 'Node.js', 'MongoDB'];
  };

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <div className="projects-container">
        <div className="section-header">
          <div className="section-badge">
            <span>💻</span>
            Featured Work
          </div>
          
          <h2 className="heading-xl">
            Projects That <span className="gradient-text">Define</span> My Journey
          </h2>
          
          <p className="text-lg">
            From innovative web applications to engaging content creation, 
            each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'web' ? 'Web Apps' :
               category === 'mobile' ? 'Mobile Apps' : 'Content'}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'animate' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img 
                  src={project.src} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.url && (
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn primary"
                        aria-label="View live demo"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    )}
                    
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn secondary"
                        aria-label="View source code"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-status">
                    {project.url ? (
                      <span className="status-badge live">Live</span>
                    ) : (
                      <span className="status-badge development">In Development</span>
                    )}
                  </div>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {getTechStack(project.title).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {project.link || 'View Project'}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l10-10"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Source Code
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3 className="heading-md">Have a project in mind?</h3>
            <p className="text-lg">
              I'm always excited to work on new challenges and bring innovative ideas to life.
            </p>
          </div>
          
          <div className="cta-buttons">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            
            <a 
              href="https://github.com/rajatxdua"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              View All on GitHub
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
