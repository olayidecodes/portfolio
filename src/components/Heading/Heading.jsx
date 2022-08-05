import React from 'react'
import './Heading.scss'

const Heading = ({title1, title2}) => {
  return (
    <div>
        <h6 className="title1">{title1}</h6>
        <h1 className="title2">{title2}</h1>
        <hr className="title-line" />
    </div>
  )
}

export default Heading