import React from 'react';
import Feature from './components/feature'

export const Root = () => {
  return (
    <div className='container'>



      <div className='intro'>
        <div className='headshot'><img src='./images/headshot.jpg'></img></div>

        <div className='description'>

        <header>
          <h1 className='name'>Grant Phelps</h1>
          <div className='line'></div>
          <p className='center'>Creative Software Engineer</p>
          <div>
            <div className='button' style={{width:'100px',color:'#f44242'}}>About</div>
            <div className='footer'>
              <a href='https://github.com/gbphelps' className="button">Github</a>
              <a href='https://www.linkedin.com/in/gbphelps/' className="button">LinkedIn</a>
              <a href='./images/Resume.pdf' className="button">Resume</a>
            </div>
          </div>
        </header>

        </div>
      </div>




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
        body='Noteworthy is a personal planner and time management app modeled after Evernote.
        Rich text editing is provided with the Quill.js library, and all formatting is
        persisted to the database with json objects. The site uses AWS to host user-
        uploaded images, which are fetched and re-inserted into the body of each note upon
        retrieval from the database.'
      />

      <Feature
        feature='perlin'
        side='right'
        title='simul8r'
        button={{
          text: 'Generate!',
          url: '#'
        }}
        body='SIMUL8R is an interactive particle simulation in HTML5 Canvas.
        Perlin noise maps a grid of random force vectors onto a coordinate
        system and calculates acceleration with bilinear interpolation. This model
        can plot over 2,000 particles in real time.'
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
        <div className='description'>
        <h1>Get to know me</h1>
        <div className='line three'></div>
        <div>
          <div className='footer'>
            <a href='https://github.com/gbphelps' className="button">Github</a>
            <a href='https://www.linkedin.com/in/gbphelps/' className="button">LinkedIn</a>
            <a href='https://codepen.io/gbphelps/' className="button">Codepen</a>
          </div>
          <p className='center'>&#xa9; Grant Phelps</p>
        </div>
        </div>
      </div>


    </div>
  )
}
