import React from 'react'
import Location from '../components/Location/location.jsx'
const About = () => {
  return (
    <div className='container pt-14 '>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 
        border-primary/50 py-2 pl-2 text-3xl
        font-bold'>
          About us
        </h1>

        <p>
          loremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
          loremipsum  loremipsumloremipsumloremipsumloremipsumloremipsum
          loremipsum  loremipsum  loremipsum  loremipsum  loremipsum
        </p>
        <br />

        <p>
          loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum
        </p>
      </div>
      <Location />
    </div>
  )
}

export default About