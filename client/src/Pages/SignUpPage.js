
import React from 'react';
import Header from '../Components/Header'
import Hero1 from '../Components/hero1'
import Footer from '../Components/Footer'

import SignUpHero from '../Components/SignUpHero'

export default function SignUpPage() {
  return (
    <div className='SignUp'>
      <Header/>
      <Hero1/>
      <SignUpHero/>
      <Footer/>
    </div>
  );
}
