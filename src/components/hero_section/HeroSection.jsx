import React from 'react';
import './HeroSection.css';




function HeroSection() {
  return (
    <div className="hero-container">
      <video autoplay muted loop id="myVideo">
        <source src="sea-33194.mp4" type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Unleash Your Potential</h1>
        <p>Embark on a transformative journey towards success</p>
        <div className='hero-btns'>
          <button className="btn-1" href="/problem_and_solutions">Get Started</button>
          <button className="btn-1 btn--outline">Learn More</button>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
