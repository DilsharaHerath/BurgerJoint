
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import '../Components/register.css'
import Header from '../Components/Header'
import Hero1 from '../Components/hero1'
import Footer from '../Components/Footer'
import Register_comp from '../Components/Register_comp'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
    }

  return (
    <div>
        <Header/>
        <Hero1/>
        <Register_comp/>
        <Footer/>
    </div>
  )
}



