import React from 'react';
import Feature from './components/feature';
import { Link } from './components/link';
import Intro from './components/intro';

export const Root = ({mobile}) => {
  return (
    <div className={`container${mobile ? ' mobile' : ''}`}>

      <Intro/>

      <Feature
        feature='dramamine'
        side='right'
        title='Dramamine-3D'
        button={{
          text: 'Play it live!',
          url: 'http://www.grant-phelps.com/dramamine-3d/'
        }}
        body='Dramamine-3D is a high-flying browser game built with THREE-js.
        The project features a randomly generated endless runner course,
        precise collision detection for irregular geometries, torque-based controls,
        and realistic acceleration with simulated air resistance.'
      />

      <Feature
        feature='noteworthy'
        side='left'
        title='Noteworthy'
        button={{
          text: 'Go to site',
          url: 'http://note-worthy.herokuapp.com/'
        }}
        body='Noteworthy is a personal planner and note-taking app modeled after Evernote.
        Rich text editing is provided with the Quill.js library, and all formatting is
        persisted to the database with json objects. The site uses AWS to host user-
        uploaded images, which are fetched and inserted into the body of each note upon
        retrieval from the database.'
      />

      <Feature
        feature='perlin'
        side='right'
        title='simul8r'
        button={{
          text: 'Generate!',
          url: 'http://www.grant-phelps.com/SIMUL8R/'
        }}
        body='SIMUL8R is an interactive particle simulation in HTML5 Canvas.
        Using Perlin noise, a mesh of random force vectors is mapped onto a 2D plane,
        and instantaneous force is calculated using a weighted four-way averaging technique called
        bilinear interpolation. This model can plot over 2,000 particles in real time.'
      />



      <Feature
        feature='cal'
        side='left'
        title='cal9000'
        button={{
          text: 'go to site',
          url: 'http://cal9000.herokuapp.com/#/'
        }}
        body='A UI proof of concept for an event-scheduling app. A popup modal contains
        a custom form for selecting start and end dates, with real-time input
        validation for start and end times. Multi-day events spill over into the
        next day and are optimally re-organized on the calendar each time an event
        is added. Popups appear next to mouse to provide event details when hovering
        over a specific event.'
      />


      <Feature
        feature='chess'
        side='left'
        title='console chess'
        button={{
          text: 'github repo',
          url: 'https://github.com/gbphelps/console_chess'
        }}
        body='A nostalgic rendition of the age-old classic. This version uses UTF-8 chess
        pieces and font colorization provided by the Colorize gem to construct a believable
        chess board out of command line output. Arrow key controls and responsive square
        highlighting evoke a retro user experience.'
      />


      <div className='closing'>
        <div className='content'>
        <h1 style={{padding:'30px 0 20px 0'}}>Get to know me</h1>
        <div className='line three'></div>
        <div>
          <div className='footer'>
            <Link url='https://github.com/gbphelps' text='Github'/>
            <Link url='https://www.linkedin.com/in/gbphelps/' text='LinkedIn'/>
            <Link url='https://codepen.io/gbphelps/' text='Codepen'/>
          </div>
          <p style={{paddingBottom: 20}} className='center'>&#xa9; Grant Phelps</p>
        </div>
        </div>
      </div>


    </div>
  )
}

// <div className='button' style={{width:'100px',color:'#f44242'}}>About</div>
