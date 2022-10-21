import React from 'react'


import star from './images/star.png'

export default function Card(props){
  return(
    <div className='card'>
      <img src={props.img} alt="images/katie.png" className='katie' />
      <div className='katie-stat'>
        <img src={star} alt='star.png' className='star'/>
        <span >{props.rating}</span>
        <span className='gray'> ({props.rating}) •</span>
        <span className='gray'> {props.country}</span>
      </div>
      <p>{props.title}</p>
      <p> <span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
 }