import React from 'react';
import "./Content.css";

function Content() {
  return (
    <div className='content'>
        <div>
            <div className='typography'>
                <h1 className='headingg'>TYPOGRAPHY</h1>
                <img src="one.gif" className='content-image' alt="typo"></img>

            </div>
            <div className='homepage' style={{display:'flex', marginLeft:'100px'}}>
                <h1 className='headingg'>HOMPAGE</h1>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <img src="two.gif" className='content-image lengthy'/>
                    <img src="three.gif" className="content-image lengthy"/>
                </div>
            </div>
            <div className='images'>
                <h1 className='heading'> IMAGES</h1>
                <div style={{paddingTop:'24px'}}>
                    <div style={{marginLeft:'90px'}}>
                        <img src="two.gif" style={{paddingRight:'10px'}} className="content-image"/>
                        <img src="three.gif" style={{marginRight:'30px'}} className='content-image' />
                    </div>
                    <div>
                        <img src="two.gif"  className='content-image ' />
                        <img src="three.gif" className='content-image lengthy'/>
                        <img src="two.gif" className='content-image lengthy' />

                    </div>
            
                </div>
            </div>
            <div style={{display:'flex'}} className="lastt">
                <h1 className='headingg'>COMPONENTS</h1>
                <img src="two.gif" className='content-image last-image lengthy' alt="nineimage"></img>
            </div>
        </div>
      
    </div>
  )
}

export default Content;
