import React from 'react'
import Add from '../img/profileIMG.jpg'
import {signOut} from "firebase/auth"
import { auth } from "../firebase"
const Navbar = () => {
  return (
    <div className="navbar">
    <span className="logo">Chat</span>
    <div className="user">
      <img src={Add} alt="" />
      <span>John</span>
      <button onClick={()=>signOut(auth)}>Log out</button>
    </div>
    </div>
  )
}

export default Navbar