import React from 'react';
import './section1.css';
import Image1 from '../images/whooper.png'
import Image2 from '../images/Drinks.png'
import Image3 from '../images/sides.png'
//import { FaArrowRight } from 'react-icons/fa';


class Section1 extends React.Component {
  render() {
    return (
        <div className='section_1'>
          <h1>Our Cake</h1>
          <section >
           <div className='flex'>
           <div className='flex_1'>
                <img className="sec1_image" src={Image1}></img>
                <h3 className='sec_1_text'>Whooper</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="select-cake-button">Select</button>
            </div>

            <div className='flex_2'>
                <img className="sec1_image" src={Image2}></img>
                <h3 className='sec_1_text' >Drinks & Coffee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="select-cake-button">Select</button>
            </div>

            <div className='flex_3'>
                <img className="sec1_image" src={Image3}></img>
                <h3 className='sec_1_text'>Fries</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
                 <button className="select-cake-button">Select</button>
            </div>
           </div>
          </section>
        </div>
        
    );
  }
}

export default Section1;