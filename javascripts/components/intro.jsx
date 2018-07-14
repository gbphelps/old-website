import React from 'react';
import { Link } from './link';

const bio = (
  <div className='slide animate' key='bio'>
    <h2>Biography</h2>
    I'm a Yale Mechanical Engineering grad and full-stack engineer
    with a passion for well-designed user interfaces.
    My projects incorporate interactive animations and well-designed
    forms to make web apps intuitive and more enjoyable to use.
    I'm a former editor and avid connoisseur of sci fi novels—
    ask me for recommendations. Skills include React + Redux, Ruby on Rails,
    JavaScript, SQL, Git, and JQuery.
  </div>
)

const edu = (
  <div className='slide animate' key='edu'>
    <h2>Education</h2>
    <img src='./images/yale.png' style={{display:'block', height: 'auto', width: 150, margin: '10px auto'}}/>
      <img src='./images/aa.svg' style={{height: 'auto', width: 100, margin:10}}/>
  </div>
)

const skills = (
  <div className='slide animate' key='skills'>
    <h2>Skills</h2>
    <div>
      <img src='./images/react.png' style={{height: 'auto', width: 100, margin:10}}/>
      <img src='./images/redux.png' style={{height: 'auto', width: 100, margin:10}}/>
      <img src='./images/ruby.svg' style={{height: 'auto', width: 100, margin:10}}/>
    </div>
    <div>
      <img src='./images/html5.svg' style={{height: 'auto', width: 100, margin:10}}/>
      <img src='./images/css3.svg' style={{height: 'auto', width: 100, margin:10}}/>
      <img src='./images/postgresql.svg' style={{height: 'auto', width: 100, margin:10}}/>
    </div>
  </div>
)

const marquee = { bio, edu, skills }

export default class Intro extends React.Component{
  constructor(props){
    super(props);
    this.state={
      about: false,
      active: 'bio',
      prev: null
    }
  }


  option(choice){
    return (
      <div
        className={`option${this.state.active === choice ? ' active': ''}`}
        onClick={()=>this.setState({prev: this.state.active, active: choice})}/>
    )
  }

  render(){
    return(
      <div className={`intro${this.state.about ? ' about' : ''}`}>
        <div className='bio' style={{zIndex:-1}}>

          <div className='current' key={this.state.active}>{marquee[this.state.active]}</div>
          <div className='prev' key={this.state.prev}>{marquee[this.state.prev]}</div>

        </div>

        <div className='slide-selector' style={{position:'relative',zIndex:10000}}>
          {this.option('bio')}
          {this.option('edu')}
          {this.option('skills')}
          <div style={{marginTop:-7, cursor:'pointer'}} onClick={()=>this.setState({about:false})}>&#215;</div>
        </div>



        <div className='headshot' style={{position:'relative'}}><img src='./images/headshot.jpg'></img></div>

        <div className='content'>

        <header style={{height:70}}>

          <div className='banner'>


            <h1 className='name' style={{position:'relative'}}>
              Grant Phelps
            </h1>


            <div className='line' style={{position:'relative'}}>

            <div style={{
                height:400,
                width:500,
                background:'black',
                position:'absolute',
                top:0,
                zIndex:-2
              }}/>
          </div>

          </div>

            <div className='footer'>
              <Link url='https://github.com/gbphelps' text='Github'/>
              <Link url='https://www.linkedin.com/in/gbphelps/' text='LinkedIn'/>
              <Link url='./images/Resume.pdf' text='Resume'/>
            </div>


          <p className='center'>Creative Software Engineer</p>
          <p style={{margin:0, paddingBottom: 30}} className='center'>gbphelps@aya.yale.edu</p>
          <Link
            text='About'
            onClick={()=>this.setState({about: true})}
            />

        </header>

        </div>
      </div>
    );
  };

}
