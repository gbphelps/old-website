import React from 'react';

export default class Feature extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={`feature ${this.props.feature}`}>
        <div className={`pane ${this.props.side}`}>

          <div className='description'>
            <h1>{this.props.title}</h1>
            <div className='line'></div>
            <p>{this.props.body}</p>
            <a href={this.props.button.url}className="button">
              {this.props.button.text}
            </a>
          </div>


        </div>
      </div>
    )
  }
}
