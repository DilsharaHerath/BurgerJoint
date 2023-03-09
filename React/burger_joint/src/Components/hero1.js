import React from 'react';
import './hero1.css';
import HeroImage from '../images/Drinks.png'

class Hero1 extends React.Component {
  render() {
    return (
        <div class="hero">
            <div class="content">
            <h1>Burger</h1>
            <h1>joint</h1>
            <div class="aboutpage">
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius
                voluptas enim, nisi accusamus libero sed ducimus officia eligendi
                harum dolorum? Quis at veritatis, asperiores enim quos excepturi et
                minima.
            </p>
            <a href="#" class="btn">Abouts Us</a>
        </div>
      </div>
        </div>
    );
  }
}

export default Hero1;