import React from 'react'
import "./Icon.css";

function Icon({wording}) {
  return (
    <div className='icon'>
       <span className="word">{wording}</span> 
      
    </div>
  )
}

export default Icon;
