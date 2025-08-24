import React from 'react';

function About() {
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
