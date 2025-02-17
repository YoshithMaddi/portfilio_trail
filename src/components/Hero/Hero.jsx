import React, { useState, useEffect } from 'react';
import './Hero.css';
import image from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='hero' className='hero'> 
      <img src={image} alt="Profile" />
      <h1> <span>I'm Yoshith</span>,<br /> frontend developer based in India.</h1>
      
      <div className="hero-action">
        <div  className="hero-connect">
          
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
        Connect With Me
        </AnchorLink>
          </div>
        <div  className="my-resume">MY resume</div>
      </div>
    </div>
  );
}

export default Hero;
