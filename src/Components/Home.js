import React from 'react'
import logo from './1.jpeg'

export default function Home() {
    return (
        <>
            <div className="logoContainer">
                <img  className="logo" src={logo} alt="Logo"></img>
            </div>
            <div className="mainText">
                Welcome to HelpuS
        </div>
            </>

    )
}
