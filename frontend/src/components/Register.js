import React, { useState } from 'react';
import './Register.css';
import { motion, AnimatePresence } from 'framer-motion';

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
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' },
    },
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

const Register = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [packageChoice, setPackageChoice] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getPackage = (chosenPackage) => {
    setSlideNumber(2);
    setPackageChoice(chosenPackage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSlideNumber(3);
  };

  const firstSlide = () => {
    return (
      <AnimatePresence>
        <motion.div
          exit='exit'
          className='register__choosePackage glass'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='register__Options'>
            <motion.h1
              // whileHover='hover'
              variants={childVariants}
              onClick={() => getPackage('Business')}
            >
              Business
            </motion.h1>
            <motion.h1
              // whileHover='hover'
              variants={childVariants}
              onClick={() => getPackage('Personal')}
            >
              Personal
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  const secondSlide = () => {
    return (
      <motion.div
        className='register__choosePackage glass'
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
        <h1>Fill In Your Information</h1>
      </motion.div>
    );
  };
  console.log(name, password, confirmPassword);
  return (
    <div className='register'>
      <h1>Register</h1>
      <div className='register__container'>
        <div>
          {/* <h2>Business</h2>
          <h2>Personal</h2> */}
          {slideNumber === 1
            ? firstSlide()
            : slideNumber === 2
            ? secondSlide()
            : slideNumber === 3
            ? thirdSlide()
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Register;
