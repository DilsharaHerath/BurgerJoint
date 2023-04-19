import React from 'react';
import './section1.css';
import Image1 from '../images/whooper.png'
import Image2 from '../images/Drinks.png'
import Image3 from '../images/sides.png'
//import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Section1 extends React.Component {
  render() {
    return (
        <div className='section_1'>
          <h2 className='products'>OUR PRODUCTS</h2>
           <div className='container_section1'>

           <div className='con_sec_1'>
              <img className="sec1_image1" alt='' src={Image1}></img>
              <h3 className='sec_1_text'>Whooper</h3>
              <p className='para_text'>Every day, more than 11 million guests visit Burger  restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-</p>
              <button className="select-cake-button"><Link to="/Items">Select</Link></button>
            </div>

            <div className='con_sec_2'>
              <img className="sec1_image1" alt=''  src={Image2}></img>
              <h3 className='sec_1_text'>Drinks & Coffee</h3>
              <p className='para_text'>Every day, more than 11 million guests visit Burger  restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-</p>
              <button className="select-cake-button"><Link to="/Items">Select</Link></button>
            </div>

            <div className='con_sec_3'>
              <img className="sec1_image1" alt=''  src={Image3}></img>
              <h3 className='sec_1_text'>Fries</h3>
              <p className='para_text'>Every day, more than 11 million guests visit Burger  restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-</p>
              <button className="select-cake-button"><Link to="/Items">Select</Link></button>
            </div>

           </div>
        </div>
        
    );
  }
}

export default Section1;