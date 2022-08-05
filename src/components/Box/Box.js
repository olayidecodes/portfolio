import React from 'react'
import './Box.scss'
import { FiArrowUpRight } from 'react-icons/fi'

const Box = ({ image, name, description, link}) => {
  return (
    <div className='box'>
        <div className='box-image'>
            <img src={image} alt="Project Image" />
        </div>
        <div className='box-text'>
            <h4>{name}</h4>
            <p>{description}</p>
            <span><a href={link}>VIEW <FiArrowUpRight /></a></span>
        </div>
    </div>
  )
}

export default Box