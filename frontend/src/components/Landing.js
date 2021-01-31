import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <section className='landing__welcome' id='welcome'>
        <h1>DevUnite</h1>
      </section>

      <section className='landing__ourMission' id='ourMission'>
        <h1>Our Mission</h1>
      </section>

      <section className='landing__reviews' id='reviews'>
        <h1>Reviews</h1>
      </section>
    </div>
  );
};

export default Landing;
