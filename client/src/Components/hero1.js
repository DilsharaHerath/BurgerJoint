import React from 'react';
import './hero1.css';

class Hero1 extends React.Component {
  render() {
    return (
        <div class="hero">
            <h1 className='burger'>Burger</h1>
            <h1 className='burger'>Burger</h1>
            <h1 className='joint'>Joint</h1>
            <div class="aboutpage">
             <p>
             The Burger Joint is a family-owned and operated burger shop located in the heart of the Galle city. We are passionate about serving delicious and high-quality burgers made with the freshest ingredients. Our menu features an array of mouth-watering 
             burgers, sandwiches, and sides that are sure to satisfy even the most discerning palates.
            </p>
      </div>
        </div>
    );
  }
}

export default Hero1;