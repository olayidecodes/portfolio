import React from 'react'
import Heading from '../Heading/Heading'
import './About.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVuejs, faHtml5, faCss3,faJsSquare, faReact, faGitAlt} from '@fortawesome/free-brands-svg-icons'


const About = () => {
  return (
    <div className='app__about section'  id='About'>
        <div className="app__about-header section-title">
          <Heading 
            title1='About me'
            title2='Biography'
          />
        </div>
        
        <div className="app__about-details section-details">
          <div className="column">
            <div>
              <p>I'm an ambitious Frontend developer who loves creating aesthetically pleasing websites and exploring different technologies to develop beautiful interfaces.<br />I'm currently looking for opportunites to learn and collaborate with other developers to work on new, challenging and diverse projects.<br /> I work with the following technologies: 
              HTML, S(CSS), Javascript, React, Vue, Next JS, Tailwind CSS, GraphQL and GIT.</p>

              <div className='info'>
                <ul>
                  <li>
                    <h5>Name</h5>
                    <p>Victoria Matthews</p>
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
                  <FontAwesomeIcon icon={faVuejs} color="#00FF00"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About