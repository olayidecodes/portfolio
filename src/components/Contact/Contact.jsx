import React from 'react'
import Heading from '../Heading/Heading'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='app__contact section'>
        <div className="app__contact-header section-title">
            <Heading 
                title1= 'Contact'
                title2= 'Get In Touch'
            />
        </div>

        <div className="app__contact-content">
            <div className="column form-box">
                <p>If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly.</p>
        
            </div>
            <div className="column map-box">
                <h1>Contact</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact