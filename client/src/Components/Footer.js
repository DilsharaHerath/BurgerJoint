import React from 'react';
import './footer.css';
import Image2 from '../images/Icons/facebook.png'
import Image3 from '../images/Icons/instagram.png'
import Image4 from '../images/Icons/youtube.png'
import Image5 from '../images/Icons/tik-tok.png'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (

        
        <div className='footer'>
            
            <div className='footer-flex'>

              
                <div className='footer-flex-1'>
                    <h3 className='header3_footer'>Contact Information</h3>
                        <ul className='class_ul'>
                            <li data-title="con_info"><span>Contact Number : +9477-2758441</span></li>
                            <li data-title="con_info">Email  :delatck@gmail.com</li>
                            <li data-title="con_info"><span>Address  :Hapugala, Galle</span></li>
                        </ul>
                </div>

                <div className='footer-flex-2'>
                    <h3 className='header3_footer'>Shop</h3>
                    <ul className='class_ul'>
                        <li><a href="#home"><Link to="/Home">Home</Link></a></li>
                        <li><a href="#about"><Link to="/AboutUs">About Us</Link></a></li>
                        <li><a href="#login"><Link to="/Menu">Menu</Link></a></li>
                    </ul>
                </div>

                <div className='footer-flex-3'>
                    <h3 className='header3_footer'>Social Media</h3>
                    <ul className='class_ul'>
                        <li><img className="footer-image" alt='' src={Image2} /><a href="https://web.facebook.com/kavinda.herath.5494">Facebook</a></li>
                        <li><img className="footer-image" alt='' src={Image3} /><a href="https://www.instagram.com/_dela_traveldiary_/">Instagram</a></li>
                        <li><img className="footer-image" alt='' src={Image4} /><a href="https://www.youtube.com/@BURGERKING">Youtube</a></li>
                        <li><img className="footer-image" alt='' src={Image5} /><a href="https://www.tiktok.com/en/">TikTok</a></li>
                    </ul>
                    
                
                </div>
                
                <hr/>
                
            </div>
        </div>
    );
  }
}

export default Footer;