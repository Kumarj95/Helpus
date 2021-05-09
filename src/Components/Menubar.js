import React from 'react'
import {Link} from 'react-router-dom'
import { FaBars ,FaWindowClose} from 'react-icons/fa'
import {useState} from 'react'

export default function Menubar() {
    const [open, changeOpen]= useState(false);

    console.log(open);
    const myStyle={
        cursor:"pointer"
    }
    const buttonStyle={
        minWidth:"80%",
        marginTop:"25px"
    }

    const toggleMenu=()=>{
        changeOpen(!open);
    }
    return (
        <>
        {open===false?
        <button className="MenubarButton" onClick={toggleMenu} >
            
        <FaBars className="MenuBurgerBar" style={myStyle} />
            &nbsp; Select your need
        
        </button>
        :
        <div className="MenubarOpen">
            <div className="Menu">

                <FaWindowClose onClick={toggleMenu} style={{...myStyle ,"marginLeft":"250px"}} />
                <Link to="/Helpus">
                <button className="big-button" style={buttonStyle} > Home</button>
                </Link>

                <Link to="/Helpus/HospitalBeds">
                <button className="big-button" style={buttonStyle} > Hospital Beds</button>
                </Link>
                <Link to="/Helpus/Oxygen">
                <button className="big-button" style={buttonStyle} > Oxygen</button>
                </Link>
                <Link to="/Helpus/Plasma">
                <button className="big-button" style={buttonStyle} > Plasma</button>
                </Link>
                {/* <Link to="/Helpus/FoodResources">
                <button className="big-button" style={buttonStyle} > Food Resources</button>
                </Link>
                <Link to="/Helpus/Tweets">
                <button className="big-button" style={buttonStyle} > Tweets</button>
                </Link> */}
                <Link to="/Helpus/CovidStats">
                <button className="big-button" style={buttonStyle} > Covid Stats</button>
                </Link>
                <Link to="/Helpus/TelegramGroups">
                <button className="big-button" style={buttonStyle} > Telegram Groups</button>
                </Link>



            </div>

        </div>
}
        </>
    )
}
