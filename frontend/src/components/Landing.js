import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Landing.css';
import logo from './snapchat.png';

const Landing = () => {
  // Initialize an object with properties and methods
  const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
      const accepting = this.isAvailable
        ? 'is accepting applications'
        : 'is not currently accepting applications';

      console.log(
        `The ${this.position} position is ${this.type} and ${accepting}.`
      );
    },
  };

  // Use Object.create to pass properties
  // by default this object will have the same property and property values as the object parent
  const barista = Object.create(job);
  // here we have changed the positon property of our new barista object
  barista.position = 'barista';
  barista.showDetails();

  Object.keys(job).forEach((key) => {
    let value = job[key];
    console.log(value);
  });
  return (
    <>
      <nav className='landingHeader'>
        <div className='landingHeader__logo'>
          <img className='landingHeader__image' src={logo} alt='' />
        </div>

        <div className='landingHeader__right'>
          <HashLink to='#ourMission'>Our Mission</HashLink>
          <HashLink to='#reviews'>Reviews</HashLink>
        </div>
      </nav>
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
    </>
  );
};

export default Landing;
