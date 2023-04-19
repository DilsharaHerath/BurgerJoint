import React from 'react'
import Header from '../Components/Header'
import Hero1 from '../Components/hero1'
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'
import LoginHero from '../Components/LoginHero'

export default function Login() {
  return (
    <div>
        <Header/>
        <Hero1/>
        <LoginHero/>
        <Footer/>
    </div>
  )
}
