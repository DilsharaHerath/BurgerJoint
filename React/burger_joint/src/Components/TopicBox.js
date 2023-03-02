import React from 'react'
import './topicbox.css' 

export default function TopicBox() {
  return (
    <nav>
        <h2 class="logo">Burger <span>Joint</span></h2>
        <ul>
          <li><a href="#About1">About</a></li>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Menu">Menu</a></li>
        </ul>

        <a href="#" class="btn">Login</a>
    </nav>
  )
}
