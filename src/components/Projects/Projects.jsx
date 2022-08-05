import React from 'react'
import './Projects.scss'
import Box from '../Box/Box'
import Heading from '../Heading/Heading'
import restaurant from '../../assets/restaurant.png'

const Projects = () => {
  return (
    <div className='app__projects section'>
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
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />

            <Box
                image={restaurant}
                name= 'Gericht restaurant'
                description='A modern clean design of a restaurant 
                website using React. The design includes details of the website including the address, chef, awards, menu offered and pictures.'
                link='https://gericht-restaurant-xi.vercel.app/'
            />
        </div>
    </div>
  )
}

export default Projects