import React from 'react';

export const Link = ({url, text}) => (
  <a href={url} className='button' style={{width:200}}>
    {text}
    <div className='hoverline'/>
  </a>
)
