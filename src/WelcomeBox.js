import React from "react";
import "./WelcomeBox.css";
import {FiFigma} from "react-icons/fi";

function WelcomeBox() {
  return (
    <div className="welcome-box">
        <h1>welcome</h1>
        <div className="pop-up-box">
            <div className="figma-icon">
                <FiFigma style={{marginLeft:'15px',height:'30px', width:'25px'}} />
            </div>
            <div style={{marginRight:'230px'}}>
                <b>Welcome to Figma!</b> Create an account to edit and collaborate on this file.
            </div>
            <div style={{marginRight:'15px'}}>
                <button className="pop-up-button">Continue with Google</button>
                <button className="pop-up-button">Sign up with email</button>

            </div>
        </div>
    </div>
  )
}

export default WelcomeBox;



