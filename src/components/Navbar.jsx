import React from 'react'
import Airlogo from './images/Airlogo.png'



export default function Navbar(){
    return(
      <nav>
      <img src={Airlogo}  alt="logo" className='logo'/> 
      </nav>
    )
  }
