import React from 'react';
import './header.css';
import logo from '../images/burger.png'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="container_header">
        <header className="header">
        <nav>
          <img className="logo" alt='' src={logo}></img>
          <ul>
            <li><a href="#home"><Link to="/Home">Home</Link></a></li>
            <li><a href="#about"><Link to="/AboutUs">About Us</Link></a></li>
            <li><a href="#login"><Link to="/Menu">Menu</Link></a></li>
            <li>  <button className='header_button'><a href="#login"><Link to="/Signup">Signup</Link></a></button></li>
            
          </ul> 
        </nav>
      </header>
      </div>
      
    );
  }
}

export default Header;
