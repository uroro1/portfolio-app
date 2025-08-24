import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: "E-Commerce 서비스 기획",
      description: "신규 이커머스 플랫폼의 전체 서비스 기획 및 UX/UI 설계. 사용자 리서치부터 프로토타입 제작까지 전 과정 주도.",
      technologies: ["서비스 기획", "UX/UI 설계", "Figma", "사용자 리서치"],
      image: "🛒",
      github: "#",
      live: "#",
      detailedDescription: "이커머스 플랫폼의 전체 서비스 기획 프로젝트입니다. 사용자 리서치를 통해 고객 니즈를 파악하고, 경쟁사 분석을 통해 차별화 포인트를 도출했습니다. Figma를 활용한 프로토타입 제작과 사용자 테스트를 통해 서비스의 완성도를 높였습니다.",
      images: [
        "https://via.placeholder.com/800x600/667eea/ffffff?text=E-Commerce+Design+1",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=User+Research+Results",
        "https://via.placeholder.com/800x600/667eea/ffffff?text=Prototype+Screens"
      ]
    },
    {
      id: 2,
      title: "모바일 앱 프로덕트 매니저",
      description: "스타트업에서 모바일 앱의 PM 역할 수행. 애자일 방법론을 활용한 제품 개발 및 팀 리더십 경험.",
      technologies: ["Product Management", "애자일/스크럼", "팀 리더십", "데이터 분석"],
      image: "📋",
      github: "#",
      live: "#",
      detailedDescription: "스타트업 환경에서 모바일 앱의 프로덕트 매니저 역할을 수행했습니다. 애자일/스크럼 방법론을 도입하여 개발 프로세스를 개선하고, 팀 리더십을 통해 프로젝트를 성공적으로 완료했습니다. 데이터 분석을 통한 제품 개선과 사용자 피드백 반영을 주도했습니다.",
      images: [
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=Mobile+App+Screens",
        "https://via.placeholder.com/800x600/667eea/ffffff?text=Agile+Process",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=Team+Leadership"
      ]
    },
    {
      id: 3,
      title: "웹 서비스 UX 개선 프로젝트",
      description: "기존 웹 서비스의 사용성 개선 프로젝트. 사용자 테스트를 통한 문제점 도출 및 개선안 설계.",
      technologies: ["UX 개선", "사용자 테스트", "HTML/CSS", "프로토타이핑"],
      image: "🌤️",
      github: "#",
      live: "#",
      detailedDescription: "기존 웹 서비스의 사용성을 개선하는 프로젝트를 진행했습니다. 사용자 테스트를 통해 현재 서비스의 문제점을 도출하고, 개선안을 설계했습니다. HTML/CSS를 활용한 프로토타이핑과 실제 구현을 통해 사용자 경험을 크게 개선했습니다.",
      images: [
        "https://via.placeholder.com/800x600/667eea/ffffff?text=Before+UX+Improvement",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=After+UX+Improvement",
        "https://via.placeholder.com/800x600/667eea/ffffff?text=User+Testing+Results"
      ]
    },
    {
      id: 4,
      title: "데이터 기반 서비스 기획",
      description: "빅데이터 분석을 통한 새로운 서비스 기획. 사용자 행동 패턴 분석 및 인사이트 도출.",
      technologies: ["데이터 분석", "서비스 기획", "SQL", "Tableau"],
      image: "🌤️",
      github: "#",
      live: "#",
      detailedDescription: "빅데이터 분석을 통해 새로운 서비스를 기획하는 프로젝트입니다. 사용자 행동 패턴을 분석하여 인사이트를 도출하고, 이를 바탕으로 새로운 서비스 아이디어를 제안했습니다. SQL과 Tableau를 활용한 데이터 시각화를 통해 이해관계자들에게 효과적으로 아이디어를 전달했습니다.",
      images: [
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=Data+Analysis+Results",
        "https://via.placeholder.com/800x600/667eea/ffffff?text=User+Behavior+Patterns",
        "https://via.placeholder.com/800x600/764ba2/ffffff?text=Service+Proposal"
      ]
    }
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // 자동 슬라이드 효과
  React.useEffect(() => {
    let interval;
    if (isPlaying && selectedProject) {
      interval = setInterval(() => {
        nextImage();
      }, 5000); // 3초에서 5초로 변경
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedProject, currentImageIndex]);

  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects & Experience</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card card">
                <div className="project-header">
                  <div className="project-icon">
                    <span>{project.image}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup(project);
                    }}
                    className="project-link github"
                  >
                    <span>상세보기</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <span>결과물</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              <span></span>
              <span></span>
            </button>
            
            <div className="popup-header">
              <h2>{selectedProject.title}</h2>
            </div>
            
            <div className="image-slider">
              <div className="slider-container">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="slider-image"
                />
                
                <button className="slider-nav prev" onClick={prevImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="slider-nav next" onClick={nextImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="slider-controls">
                <div className="pagination">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`pagination-dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></button>
                  ))}
                </div>
                
                <button className="play-pause-btn" onClick={togglePlayPause}>
                  <div className={`play-pause-icon ${isPlaying ? 'pause' : 'play'}`}>
                    <div className="play-pause-inner"></div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="popup-description">
              <p>{selectedProject.detailedDescription}</p>
            </div>
            
            <div className="popup-tech">
              {selectedProject.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
