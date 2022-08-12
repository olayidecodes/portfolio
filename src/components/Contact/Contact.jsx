import React, { useRef } from 'react'
import Heading from '../Heading/Heading'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_yqnz36e",
                'template_jgwpp7l',
                refForm.current,
                'VvVy7JfdLGoFmRKB9'
            )
            .then(
                () => {
                    alert('Message successful sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

  return (
    <div className='app__contact section' id='Contact'>
        <div className="app__contact-header section-title">
            <Heading 
                title1= 'Contact'
                title2= 'Get In Touch'
            />
        </div>

        <div className="app__contact-content"> 

            <div className="form-box">
                <p>If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly.</p>
             
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'> 
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>

                    </form>
                </div>

                <div className="social-links">
                    <AiFillLinkedin className="link"/>
                    <FaTwitter className='link' />
                    <FaGithub className="link" />
                </div>
            </div>

            {/* <div className='info-map'>
                Victoria Matthews,
                <br />
                Nigeria,
                <br />
                20, Alagbaka Akure, 340223 <br />
                Ondo State. <br />
                <span>olayidecodes@gmail.com</span>
            </div> */}

            {/* <div className='map-wrap'>
                <MapContainer center={[7.1000, 4.8417]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[7.1000, 4.8417]}>
                        <Popup>Victoria Lives here, come over for a cup of time :)</Popup>
                    </Marker>
                </MapContainer>
            </div> */}
        </div>
    </div>
  )
}

export default Contact