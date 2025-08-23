import React from 'react';

function About() {
  const skills = [
    {
      category: "기획 & 분석",
      skills: [
        { name: "서비스 기획", level: 95 },
        { name: "요구사항 분석", level: 90 },
        { name: "사용자 리서치", level: 85 },
        { name: "데이터 분석", level: 80 }
      ]
    },
    {
      category: "디자인 & 퍼블리싱",
      skills: [
        { name: "UI/UX 디자인", level: 85 },
        { name: "Figma/Sketch", level: 90 },
        { name: "HTML/CSS", level: 80 },
        { name: "프로토타이핑", level: 88 }
      ]
    },
    {
      category: "프로젝트 관리",
      skills: [
        { name: "애자일/스크럼", level: 92 },
        { name: "스테이크홀더 관리", level: 88 },
        { name: "리스크 관리", level: 85 },
        { name: "팀 리더십", level: 90 }
      ]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-card card">
            <div className="profile-section">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>🎯</span>
                </div>
              </div>
              <div className="profile-info">
                <h3 className="name">Your Name</h3>
                <p className="title">Service Planner & Product Manager</p>
                <p className="description">
                  안녕하세요! 저는 사용자 중심의 서비스를 기획하고 제품을 성공적으로 런칭하는 것을 좋아하는 서비스 기획자입니다. 
                  PM 경험을 바탕으로 비즈니스 목표와 사용자 니즈를 균형있게 만족시키는 서비스를 기획하고, 
                  간단한 퍼블리싱과 디자인도 직접 구현할 수 있습니다.
                </p>
              </div>
            </div>
            
            <div className="skills-section">
              <h4>Skills & Expertise</h4>
              <div className="skills-grid">
                {skills.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="skill-category">
                    <h5 className="category-title">{category.category}</h5>
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
