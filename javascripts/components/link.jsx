import React from 'react';

export const Link = ({url, text}) => (
  <div style={{width: 200, display:'flex'}}>
  <a href={url} className='button'>
    {text}
    <div className='hoverline'/>
  </a>
  </div>
)
