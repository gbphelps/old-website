import React from 'react';
import { Link } from './link'

export default class Feature extends React.Component{
  constructor(props){
    super(props);
    this.state={
      minimize: true
    }
    this.minimize = this.minimize.bind(this)
  }

  minimize(){
    document.getElementsByClassName(this.props.feature)[0].classList.remove('focus')
  }

  render(){
    return(
      <div className={`feature ${this.props.feature}`}>
          <div/>
          <div className='description hidden'>
            <div style={{
                width:400,
                height:400,
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
              <h1>{this.props.title}</h1>
              <div className='line'></div>
              <p className='description-body'>{this.props.body}</p>
              <Link url={this.props.button.url} text={this.props.button.text}/>
            </div>
          </div>
      </div>
    )
  }
}

//<span onClick={this.minimize}>&#215;</span>
