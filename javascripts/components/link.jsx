import React from 'react';

export const Link = ({url, text, onClick}) => (
  <a href={url} className='button' style={{width:200,cursor:'pointer'}} onClick={onClick}>
    {text}
    <div className='hoverline'/>
  </a>
)
