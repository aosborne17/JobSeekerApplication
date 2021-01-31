import React, { useState } from 'react';
import './Register.css';
import { motion, AnimatePresence } from 'framer-motion';

import free from './corruption.png';
import members from './dollar.png';
import premium from './money.png';
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      // delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 1,
    },
    // exit: {
    //   x: '-100vw',
    //   transition: { ease: 'easeInOut' },
    // },
  },
};

const childVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.8, 1],
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    // transition: {
    //   duration: 0.8,
    //   yoyo: Infinity,
    // },
  },
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.8, 1],
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.8,
      yoyo: Infinity,
    },
  },
};

// note to self, all the motion.divs need keys otherwise it gets confused

const Register = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [accountChoice, setAccountChoice] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getAccount = (chosenAccount) => {
    setSlideNumber(2);
    setAccountChoice(chosenAccount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSlideNumber(3);
  };

  const getPackage = () => {
    setSlideNumber(4);
  };

  const firstSlide = () => {
    return (
      <motion.div
        key={1}
        className='register__chooseAccount glass'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='register__Options'>
          <motion.h1
            // whileHover='hover'
            variants={childVariants}
            onClick={() => getAccount('Business')}
          >
            Business
          </motion.h1>
          <motion.h1
            // whileHover='hover'
            variants={childVariants}
            onClick={() => getAccount('Personal')}
          >
            Personal
          </motion.h1>
        </div>
      </motion.div>
    );
  };

  const secondSlide = () => {
    return (
      <motion.div
        key={2}
        className='register__accountDetails glass'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <h1>Fill In Your Information</h1>
        <form onSubmit={handleSubmit} className='register__form'>
          <input type='text' onChange={(e) => setName(e.target.value)} />
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type='submit'>Hehe</button>
        </form>
      </motion.div>
    );
  };

  const thirdSlide = () => {
    return (
      <motion.div
        className='register__choosePackage glass'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <h1>Choose Your Package</h1>

        <section className='register__packageSection'>
          <div className='register__freePackage card'>
            <img className='register__packageImages' src={free} alt='' />
            <h2>Free Package</h2>

            <ul>
              <li>Access to Dashboard</li>
              <li>5 Weekly Attempts At Quiz</li>
              <li>3 Weekly Applications</li>
            </ul>

            <button>Subscribe</button>
          </div>
          <div className='register__membersPackage card'>
            <img className='register__packageImages' src={members} alt='' />
            <h2>Members Package</h2>
            <ul>
              <li>Access to Dashboard</li>
              <li>5 Weekly Attempts At Quiz</li>
              <li>3 Weekly Applications</li>
            </ul>

            <button>Subscribe</button>
          </div>
          <div className='register__premiumPackage card'>
            <img className='register__packageImages' src={premium} alt='' />
            <h2>Premium Package</h2>
            <ul>
              <li>Access to Dashboard</li>
              <li>Unlimited Weekly Attempts At Quiz</li>
              <li>Unlimited Weekly Applications</li>

              <button>Subscribe</button>
            </ul>
          </div>
        </section>
      </motion.div>
    );
  };

  const finalSlide = () => {
    return (
      <>
        {/* {loading && <Loader />} */}
        <div>Thank You For Your Application, We are Creating your account</div>
      </>
    );
  };
  console.log(name, password, confirmPassword);
  return (
    <div className='register'>
      <h1 className='register__title'>Register</h1>
      {slideNumber === 1
        ? firstSlide()
        : slideNumber === 2
        ? secondSlide()
        : slideNumber === 3
        ? thirdSlide()
        : slideNumber === 4
        ? finalSlide()
        : ''}
    </div>
  );
};

export default Register;
