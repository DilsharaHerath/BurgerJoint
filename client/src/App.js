import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home.js'
import Menu from './Pages/Menu'
import Login from './Pages/Login'
import SignUp from './Pages/SignUpPage'
import Items from './Pages/Items'

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Items" element={<Items/>}/>
    </Routes>
    </Router>
  );
}

export default App;