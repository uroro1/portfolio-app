import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="contact-info-card card">
            <h3>Let's Create Something Amazing</h3>
            <p>새로운 서비스 기획이나 제품 개발에 대해 이야기하고 싶으시다면 언제든 연락주세요! 
            사용자 중심의 서비스를 함께 만들어가고 싶습니다.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>010-1234-5678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>서울, 대한민국</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-links-card card">
            <h3>Connect With Me</h3>
            <div className="social-grid">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>GitHub</span>
              </a>
              <a href="https://behance.net/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>Behance</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
