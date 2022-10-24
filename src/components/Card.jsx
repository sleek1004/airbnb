import React from 'react'


import star from './images/star.png'

export default function Card(props){
  return(
    <div className='card'>
      <img src={props.img} alt="images/katie.png" className='card-image' />
      <div className='card-stat'>
        <img src={star} alt='star.png' className='star'/>
        <span >{props.rating}</span>
        <span className='gray'> ({props.reviewCount}) •</span>
        <span className='gray'> {props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='card-price'> <span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
 }