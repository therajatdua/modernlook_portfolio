import React, { useState, useRef, useEffect } from 'react';

const ContentShowcase = () => {
  const [activeContent, setActiveContent] = useState(0);
  const carouselRef = useRef(null);

  const contentItems = [
    {
      id: 1,
      platform: 'YouTube',
      title: 'Vlogzzzz',
      description: 'VLOGZZZZZ is a behind-the-scenes vlog series capturing my journey as a content creator — from hackathons and youth fests to spontaneous travel and everyday chaos. Raw, real, and full of energy.',
      thumbnail: './img/vlogs.png',
      views: '5K+',
      duration: null,
      link: 'https://www.youtube.com/playlist?list=PLitQSWxgOSlgyn756ybCUdPMecU41xKZK',
      category: 'Lifestyle' 
    },
    {
      id: 2,
      platform: 'YouTube', 
      title: 'Editing We Learn Series',
      description: 'Editing We Learn is a beginner-friendly series where I guide aspiring creators through the fundamentals of video editing. From recording tips to learning industry-standard tools like Premiere Pro and Photoshop — this playlist is your launchpad into the editing world.',
      thumbnail: './img/editing.png',
      views: '2K+',
      duration: null,
      link: 'https://youtube.com/playlist?list=PLitQSWxgOSlgsBF1De85bGUlCNoyuHl8C&si=NKdpC3hixY-hXVTr',
      category: 'Editing'
    },
    {
      id: 3,
      platform: 'Youtube',
      title: 'Samsung M33 Review',
      description: 'Overview of Samsung Galaxy M33 5G',
      thumbnail: './img/tech1.png',
      views: '2.5K+',
      duration: '5.16',
      link: 'https://youtu.be/9EVCfykdVHg',
      category: 'Review'
    },
    {
      id: 4,
      platform: 'Instagram',
      title: 'Teachers Day 2024❤️🌷',
      description: 'The ACC event ~  With some classy touch editzz',
      thumbnail: './img/reel1.jpg',
      views: '10.8K+',
      duration: '00:36',
      link: 'https://www.instagram.com/reel/C_pOABgotBy/?igsh=MWRpNjhsc2FxY2p1bg==',
      category: 'Edit Reels'
    },
    {
      id: 5,
      platform: 'Unknown',
      title: 'Upcoming',
      description: null,
      thumbnail: './img/placeholder-image-2.png',
      views: null,
      duration: '0:45',
      link: null,
      category: null
    }
  ];

  const scrollToContent = (index) => {
    if (carouselRef.current) {
      const scrollAmount = index * 320; // 300px width + 20px gap
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    setActiveContent(index);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = 320;
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setActiveContent(currentIndex);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="content-showcase" id="content">
      <div className="content-container">
        <div className="section-header">
          <div className="section-badge">
            <span>🎬</span>
            My Content Journey
          </div>
          
          <h2 className="heading-xl">
            Creating Content That <span className="gradient-text">Inspires</span>
          </h2>
          
          <p className="text-lg">
            From tech tutorials to lifestyle vlogs, I share my knowledge and experiences 
            across multiple platforms to help others learn and grow.
          </p>
        </div>

        <div className="content-stats">
          <div className="stat-card">
            <div className="stat-icon">📺</div>
            <div className="stat-number gradient-text">100+</div>
            <div className="stat-label">YouTube Videos</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📱</div>
            <div className="stat-number gradient-text">20+</div>
            <div className="stat-label">Instagram Posts</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number gradient-text">2K+</div>
            <div className="stat-label">Total Followers</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❤️</div>
            <div className="stat-number gradient-text">30K+</div>
            <div className="stat-label">Total Likes</div>
          </div>
        </div>

        <div className="content-carousel-wrapper">
          <div className="content-carousel" ref={carouselRef}>
            {contentItems.map((item, index) => (
              <div 
                key={item.id}
                className={`content-item ${index === activeContent ? 'active' : ''}`}
              >
                <div className="content-thumbnail">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="content-overlay">
                    <button 
                      className="play-btn"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                  <div className="content-meta">
                    <span className={`platform-badge ${item.platform.toLowerCase()}`}>
                      {item.platform}
                    </span>
                    <span className="duration">{item.duration}</span>
                  </div>
                </div>
                
                <div className="content-info">
                  <div className="content-category">{item.category}</div>
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-description">{item.description}</p>
                  
                  <div className="content-stats-item">
                    <div className="views">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      {item.views} views
                    </div>
                    
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="watch-btn"
                    >
                      Watch
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l10-10"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev"
              onClick={() => scrollToContent(Math.max(0, activeContent - 1))}
              disabled={activeContent === 0}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="carousel-dots">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeContent ? 'active' : ''}`}
                  onClick={() => scrollToContent(index)}
                />
              ))}
            </div>
            
            <button 
              className="carousel-btn next"
              onClick={() => scrollToContent(Math.min(contentItems.length - 1, activeContent + 1))}
              disabled={activeContent === contentItems.length - 1}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="content-cta">
          <div className="cta-content">
            <h3 className="heading-md">Ready to collaborate on content?</h3>
            <p className="text-lg">
              I'm always open to creating content together, whether it's tech tutorials, 
              project showcases, or sharing development insights.
            </p>
          </div>
          
          <div className="cta-buttons">
            <a 
              href="https://www.youtube.com/@rajatxdua"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Subscribe on YouTube
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/therajatdua"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Follow on Instagram
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
