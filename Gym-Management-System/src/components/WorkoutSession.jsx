// eslint-disable-next-line no-unused-vars
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Featured Workout Sessions</h1>
        <p>
          Explore our best-loved workout programs tailored to support your
          fitness journey. Whether you’re looking for high-energy interval
          training or strength-focused routines, each session is thoughtfully
          designed by professional trainers to maximize your results and keep
          you motivated.
        </p>
        <img src="/img5.jpg" alt="workout session" />
      </div>
      <div className="wrapper">
        <h1>Signature Bootcamps</h1>
        <p>
          Take part in our dynamic bootcamps for a truly transformative fitness
          journey. Each session combines cardio, strength training, and
          functional movements designed to push your limits and keep you
          motivated. Suitable for beginners as well as seasoned athletes, our
          bootcamps are tailored to challenge every fitness level.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIT Bootcamp</h4>
            <p>
              Experience the power of High-Intensity Interval Training with our
              HIIT bootcamp. This program combines explosive bursts of exercise
              with short recovery phases, helping you torch calories, boost
              stamina, and improve overall endurance.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Enhance your strength and elevate your fitness with targeted
              exercises designed to work all major muscle groups. This bootcamp
              is perfect for anyone aiming to build power, increase muscle mass,
              and improve overall physical performance.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Energize your workout with our cardio kickboxing bootcamp. This
              fast-paced class blends martial arts-inspired moves with powerful
              cardio training to boost agility, enhance speed, and build lasting
              stamina.
            </p>
          </div>
          <div>
            <h4>Functional Fitness</h4>
            <p>
              Build strength and mobility that translates into everyday life
              with our functional fitness bootcamp. Through dynamic exercises
              that mirror real-life movements, you’ll improve balance,
              flexibility, and overall body performance.
            </p>
          </div>
          <div>
            <h4>Heavy Weight Lifting</h4>
            <p>
              Challenge yourself with our high-intensity heavy weight lifting
              sessions. Focused on compound movements and progressive training,
              these workouts are designed to maximize strength, increase muscle
              mass, and accelerate your fitness progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
