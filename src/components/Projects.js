import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce 서비스 기획",
      description: "신규 이커머스 플랫폼의 전체 서비스 기획 및 UX/UI 설계. 사용자 리서치부터 프로토타입 제작까지 전 과정 주도.",
      technologies: ["서비스 기획", "UX/UI 설계", "Figma", "사용자 리서치"],
      image: "🛒",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "모바일 앱 프로덕트 매니저",
      description: "스타트업에서 모바일 앱의 PM 역할 수행. 애자일 방법론을 활용한 제품 개발 및 팀 리더십 경험.",
      technologies: ["Product Management", "애자일/스크럼", "팀 리더십", "데이터 분석"],
      image: "📋",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "웹 서비스 UX 개선 프로젝트",
      description: "기존 웹 서비스의 사용성 개선 프로젝트. 사용자 테스트를 통한 문제점 도출 및 개선안 설계.",
      technologies: ["UX 개선", "사용자 테스트", "HTML/CSS", "프로토타이핑"],
      image: "🌤️",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "데이터 기반 서비스 기획",
      description: "빅데이터 분석을 통한 새로운 서비스 기획. 사용자 행동 패턴 분석 및 인사이트 도출.",
      technologies: ["데이터 분석", "서비스 기획", "SQL", "Tableau"],
      image: "🌤️",
      github: "#",
      live: "#"
    }
  ];

  return (
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
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
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
  );
}

export default Projects;
