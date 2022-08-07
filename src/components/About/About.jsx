import React from 'react'
import Heading from '../Heading/Heading'
import './About.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faHtml5, faCss3,faJsSquare, faReact, faGitAlt} from '@fortawesome/free-brands-svg-icons'


const About = () => {
  return (
    <div className='app__about section'>
        <div className="app__about-header section-title">
          <Heading 
            title1='About me'
            title2='Biography'
          />
        </div>
        
        <div className="app__about-details section-details">
          <div className="column">
            <div>
              <p>I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.</p>

              <div className='info'>
                <ul>
                  <li>
                    <h5>Name</h5>
                    <p>Victoria Matthews</p>
                  </li>

                  <li>
                    <h5>Birthday</h5>
                    <p>29th October, 2002</p>
                  </li>

                  <li>
                    <h5>Age</h5>
                    <p>19</p>
                  </li>

                  <li>
                    <h5>Address</h5>
                    <p>Ondo State, Nigeria</p>
                  </li>

                  <li>
                    <h5>Phone</h5>
                    <p>+2348055716799</p>
                  </li>

                  <li>
                    <h5>email</h5>
                    <p>olayidecodes@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='cubespinner column'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About