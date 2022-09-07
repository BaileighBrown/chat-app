import React from 'react'
import Add from '../img/profileIMG.jpg'
const Navbar = () => {
  return (
    <div className="navbar">
    <span className="logo">Chat</span>
    <div className="user">
      <img src={Add} alt="" />
      <span>John</span>
      <button>Log out</button>
    </div>
    </div>
  )
}

export default Navbar