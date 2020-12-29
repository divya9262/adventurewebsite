import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';


 function  HeroSection() {
	return (
		<div className='hero-container'> 
          <video src="https://cdn.videvo.net/videvo_files/video/free/2016-05/small_watermarked/524013672_preview.webm" autoPlay loop muted />

          <h1>ADVENTURE AWAITS</h1>
          <p>Jharkhand - "The Land of Forest." </p>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Get STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /> 

            </Button>
          </div>
		</div>

		);
}

export default HeroSection;