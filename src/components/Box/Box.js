import React from 'react'
import './Box.scss'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub,FaEye } from 'react-icons/fa'

const Box = ({ image, name, description, link, code }) => {
  return (
    <div className='box'>
        <div className='box-image'>
            <img src={image} alt="Project Image" loading='lazy' />
        </div>
        <div className='box-text'>
            <h4>{name}</h4>
            <p>{description}</p>
            <div className='links'>
              <span><a href={link}>VIEW <FaEye className='icon'/></a></span>
              <span><a href={code}>CODE <FaGithub className='icon'/></a></span>
            </div>
            </div>
    </div>
  )
}

export default Box