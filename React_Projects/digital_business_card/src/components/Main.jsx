import React from "react";

function Main() {
  return (
    <main>
      <div className="personal-info">
        <h2 className="name">Komalpreet Kaur</h2>
        <p className="job-title">Frontend Developer</p>
        <p className="portfolio-link">Portfolio website Link</p>
      </div>
      <div className="contact-links">
        <a className="email-link social-link" href="mailto:komalgill0310@gmail.com">Email</a>
        <a className="linkedin-link social-link" href="https://www.linkedin.com/in/komalpreet-kaur-3b6924177/" target="_blank">LinkedIn</a>
      </div>
      <div className="sections">
        <div className="about-section">
          <h3 className="section-title">About</h3>
          <p className="section-description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interests-section">
          <h3 className="section-title">Interests</h3>
          <p className="section-description">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
