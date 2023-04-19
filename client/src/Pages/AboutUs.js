import React from 'react'
import '../Components/aboutus.css';
import Header from '../Components/Header'
import Hero1 from '../Components/hero1'
import Footer from '../Components/Footer'
import Image1 from '../images/About/about_1.png'
import Image2 from '../images/About/about2.png'


export default function AboutUs() {
  return (
    <div>
        <Header/>
        <Hero1/>
        <div className="aboutus">
            <h2 className='products'>ABOUT US</h2>

            <div className="about_sec1">
            <p className='about_p'>The Burger Joint is a family-owned and operated burger shop located in the heart of the city. We are passionate about serving 
delicious and high-quality burgers made with the freshest ingredients. Our menu features an array of mouth-watering burgers, 
sandwiches, and sides that are sure to satisfy even the most discerning palates.
At The Burger Joint, we believe that good food should be accessible to everyone, which is why we use only the finest ingredients and take
great care to ensure that each burger is cooked to perfection. Our menu is designed to cater to a variety of tastes and dietary requirements, and 
we are always experimenting with new and innovative flavors to keep our menu fresh and exciting.

</p>
                 <img className="sec1_image" src={Image1}></img>    
        </div>

        <div className="about_sec1">
        <img className="sec1_image" src={Image2}></img> 
            <p className='about_p'>
            We are a family-run business, and our team of skilled chefs, cooks, and servers is dedicated to delivering exceptional customer service. Whether you are grabbing a quick bite on the go or settling in for a leisurely meal, we strive to make your visit to The Burger Joint a memorable one.
So if you are looking for a delicious and satisfying meal, come and visit us at The Burger Joint. We look forward to serving you soon!
            </p>
                    
        </div>

        </div>

        <Footer/>
        
        
    </div>
  )
}
