import React from 'react';
import './header.css';
import logo from '../images/burger.png'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <img className="logo" src={logo}></img>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#login">Cake</a></li>
            <li>  <button className='btn'><a href="#login">Login</a></button></li>
          </ul> 
        </nav>
      </header>
    );
  }
}

export default Header;
