import React from 'react'
import './Projects.scss'
import Box from '../Box/Box'
import Heading from '../Heading/Heading'
import restaurant from '../../assets/restaurant.png'
import messenger from '../../assets/messenger.png'
import blockchainnest from '../../assets/blockchainnest.png'
import admin_dashboard from '../../assets/admin_dashboard.png'
import youtube_clone from '../../assets/youtube_clone.png'
import blog from '../../assets/blog.png'
import weather_app from '../../assets/weather_app.png'
import audi_r8 from '../../assets/audi_r8.png'
import makeup from '../../assets/makeup.png'
import agency from '../../assets/agency.png'


const Projects = () => {
  return (
    <div className='app__projects section' id='Projects'>
        <div className="app__projects-header section-title">
            <Heading
                title1= 'portfolio'
                title2= 'Featured Projects'
            />
        </div>
        <div className="app__projects-contents">
            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
                code = 'https://github.com/olayidecodes/Modern-Restaurant-App'
            />

            <Box
                image={messenger}
                name= 'Messenger'
                description='A dynamic messaging app with real-time updates, stunning UI, secure authentication, file uploads, and engaging interactions.'
                link='https://messenger-clone-olayidecodes.vercel.app/'
                code= 'https://github.com/olayidecodes/Messenger-Clone'
            />

            

            <Box
                image={blockchainnest}
                name= 'Blockchainnest'
                description='Full-stack blog app: React, MySQL, Node; dynamic content, user auth, real-time updates for engagement'
                link='https://blockchain-nest.vercel.app/'
                code= 'https://github.com/olayidecodes/blockchain-nest'
            />

            <Box
                image={blog}
                name= 'Ola&#39;s Blog'
                description='A simple blog application built with Next JS for static paths generation and GraphQL for content management.'
                link='https://olas-blog-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/olas-blog'
            />

            <Box
                image={agency}
                name= 'AGENCY'
                description='A web application that fetches a list of hotels in lagos and provides detailed information about each of the hotels.'
                link='https://hotel-finder-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/Hotel-Finder.git'
            />

            <Box
                image={youtube_clone}
                name= 'Youtube Clone'
                description='Youtube Clone with video pages created using React, React Router, and Styled Components.'
                link='https://youtube-clone-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/Youtube-Clone'
            />

            <Box
                image={audi_r8}
                name= 'Audi R8'
                description='A minimal car website designed with React containing car details, perks, and updates.'
                link='https://audi-r8-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/Audi-R8-website'
            />
        </div>
    </div>
  )
}

export default Projects