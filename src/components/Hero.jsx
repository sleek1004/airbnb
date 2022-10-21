 import React from 'react'
 import airpics from './images/airpics.png'
 
 export default function Hero(){
    return(
      <section className='hero'>
       <img src={airpics} alt="images/airpics.png" className='logo2' />
       <h1 className='hero-header'>Online Experiences</h1>
       <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
    )
  }