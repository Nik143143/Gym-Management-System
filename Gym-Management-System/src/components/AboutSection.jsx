// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>Imperial Fit</h1>
        <p>
          Welcome to Imperial Fit, At Imperial Fit, we’re dedicated to guiding
          you on your fitness journey. With cutting-edge equipment, experienced
          trainers, and a supportive community, we provide everything you need
          to stay motivated and achieve your goals. Our membership options are
          designed to suit different lifestyles, ensuring you enjoy a
          personalized and rewarding fitness experience.
        </p>
        <p>
          At Imperial Fit, our mission is to build an inclusive environment
          where everyone feels supported—regardless of their fitness level.
          We’re here to inspire and guide you as you take that important first
          step toward a healthier, stronger, and happier lifestyle. Join us
          today and begin your transformation!
        </p>
        <div className="about-image">
          <img src="/public/about.jpg" alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
