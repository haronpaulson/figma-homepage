import React from 'react'
import {BsFillMenuButtonFill} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";
import "./Navigation.css";
import {BiRightArrow} from "react-icons/bi";
import {AiOutlineDown} from "react-icons/ai";
import {FaRegHandPaper} from "react-icons/fa";
import Icon from "./Icon";

function Navigation() {
  return (
    <div className='navigation'>
        <div>
            <div className='navigation-bar'>
                <div className='main-menu-icon'>

                    <BsFillMenuButtonFill />
                    <AiFillCaretDown />
                    <div className='hands' style={{backgroundColor:'blue', height:'60px',marginLeft:'10px'}}>
                        <FaRegHandPaper style={{marginLeft:'2px', marginTop:'10px',height:'30px',backgroundColor:'blue', width:'40px'}}/>
                    </div>
                </div>
                <div>
                    <p1 style={{fontSize:'25px'}}>Webpage Design</p1>
                    
                </div>
              
                <div style={{display:'flex'}} className="box">
                    <Icon wording = "A"/>
                    <button className='log-in'>Log In</button>
                    <BiRightArrow className='right-arrow'/>
                    <div className='zoom'>
                        <p2 style={{paddingRight:'5px'}}>3%</p2>
                        <AiOutlineDown style={{marginTop:'8px'}}/>

                    </div>
                </div>


            </div>
           
        </div>
      
    </div>
  )
}

export default Navigation;

