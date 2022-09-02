import React from 'react'
import './Projects.scss'
import Box from '../Box/Box'
import Heading from '../Heading/Heading'
import restaurant from '../../assets/restaurant.png'
import olacommerce from '../../assets/olacommerce.png'
import hulu_clone from '../../assets/hulu_clone.png'
import admin_dashboard from '../../assets/admin_dashboard.png'
import youtube_clone from '../../assets/youtube_clone.png'
import blog from '../../assets/blog.png'
import weather_app from '../../assets/weather_app.png'
import audi_r8 from '../../assets/audi_r8.png'
import makeup from '../../assets/makeup.png'


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
                image={blog}
                name= 'Ola&#39;s Blog'
                description='A simple blog application built with Next JS for static paths generation and GraphQL for content management.'
                link='https://olas-blog-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/olas-blog'
            />

            <Box
                image={olacommerce}
                name= 'Olacommerce'
                description='A minimal design of a shopping website executed using Next JS and an elegant layout using grid.'
                link='https://olacommerce-olayidecodes.vercel.app/'
                code= 'https://github.com/olayidecodes/olacommerce'
            />

            <Box
                image={makeup}
                name= 'JUO'
                description='A minimal makeup website created with HTML and CSS'
                link='https://juo-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/Audi-R8-website'
            />

            <Box
                image={hulu_clone}
                name= 'Hulu Clone'
                description='A simple clone of a movie streaming app using Next JS, Tailwind CSS and RESTful API to view latest movies.'
                link='https://hulu-clone-olayidecodes.vercel.app/'
                code= 'https://github.com/olayidecodes/Hulu-Clone'
            />

            <Box
                image={admin_dashboard}
                name= 'Admin Dashboard'
                description='An admin dashboard layout design using HTML, CSS, and Javascript'
                link='https://admin-dashboard-olayidecodes.vercel.app/'
                code= 'https://github.com/olayidecodes/Admin_Dashboard'
            />

            <Box
                image={youtube_clone}
                name= 'Youtube Clone'
                description='Youtube Clone with video pages created using React, React Router, and Styled Components.'
                link='https://youtube-clone-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/Youtube-Clone'
            />

            <Box
                image={weather_app}
                name= 'Weather App'
                description='An application to check the weather condition of any location using React and RESTful API.'
                link='https://weather-app-olayidecodes.vercel.app/'
                code='https://github.com/olayidecodes/Weather-App'
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