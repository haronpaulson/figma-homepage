import React from 'react';
import "./HoverDown.css";

function HoverDown() {
  return (
    <div style={{transition:'1s'}} >
        <div className='hover-down'>Main menu</div>
        <div className='triangle'></div>
       
    </div>
  )
};

export default HoverDown;
