import React from 'react';
import './section2.css';
import Image1 from '../images/Icons/cashless-payment.png'
import Image2 from '../images/Icons/money-back.png'
import Image3 from '../images/Icons/shipped.png'
import Image4 from '../images/Icons/money-back 1.png'


class Section2 extends React.Component {
  render() {
    return (
        <div className='section_2'>
           <div className='s2_flex'>
           <div className='s2_flex_1'>
                <img className="sec2_image" alt='' src={Image1}></img>
                <h3 className='sec_2_text'>Online Payment<br /></h3>
                <p>We are a big collection choose your favorite</p>
            </div>

            <div className='s2_flex_2'>
                <img className="sec2_image" alt='' src={Image2}></img>
                <h3 className='sec_2_text' >Money Back Gaurantee</h3>
                <p>We are a big collection choose your favorite </p>
            </div>
            

            <div className='s2_flex_3'>
                <img className="sec2_image" alt='' src={Image3}></img>
                <h3 className='sec_2_text'>Fast Delivery</h3>
                <p>We are a big collection choose your favorite </p>
            </div>

            <div className='s2_flex_4'>
                <img className="sec2_image" alt='' src={Image4}></img>
                <h3 className='sec_2_text' >Quality Product</h3>
                <p>We are a big collection choose your favorite </p>
            </div>

           </div>
        </div>
        
    );
  }
}

export default Section2;