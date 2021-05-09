import React,{useState,useEffect} from 'react'
import './CovidStats.css'
const CovidStats = () => {
    const [cases,setCases]=useState("");
    const [recovered,setRecovered]=useState("");
    const [dead,setDead]=useState("");
    useEffect(()=>{
        fetch("https://api.covid19api.com/summary").then((response)=> response.json())
        .then((data)=> {
            console.log(data.Countries[76].Country);
            setCases(data.Countries[76].TotalConfirmed)
            setRecovered(data.Countries[76].TotalRecovered)
            setDead(data.Countries[76].TotalDeaths)
        })
    }
    )
    return (
        <div>
            <h2>Covid 19 Cases in India</h2>
            <div className="card">
                <label style={{color:"blue"}}>Confirmed Cases</label>
                <p style={{color:"blue"}}>{cases}</p>
            </div> 
            <div className="card">
                <label style={{color:"green"}}>Recovered</label>
                <p style={{color:"green"}}>{recovered}</p>
            </div> 
            <div className="card">
                <label style={{color:"red"}}>Death</label>
                <p style={{color:"red"}}>{dead}</p>
            </div>  
        </div>
    )
}

export default CovidStats
