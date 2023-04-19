import React from 'react'
import Header from '../Components/Header'
import Hero1 from '../Components/hero1'
import Footer from '../Components/Footer'

import Section1 from '../Components/section1'
import Section2 from '../Components/Section2'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero1/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}
