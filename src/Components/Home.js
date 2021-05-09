import React from 'react'
import logo from './1.jpeg'

export default function Home() {
    return (
        <>
            <div className="logoContainer">
                <img  className="logo" src={logo} alt="Logo"></img>
            </div>
            <div className="mainText">
               <h1>Welcome to HelpuS</h1> 
               <p>A site to find all your covid resources</p>
        </div>
            </>

    )
}
