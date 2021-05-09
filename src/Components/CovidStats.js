import React,{useState,useEffect} from 'react'
import Styles from './CovidStats.module.css'
import {Col, Container, Row} from 'react-bootstrap'
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
            <h1 className="{Styles.h1}">Covid 19 Cases in India</h1>
            <Container fluid className={Styles.container}>
                {
                [
                    {
                        text:"Confirmed Cases",
                        content:cases
                    },
                    {
                        text:"Recovered",
                        content:recovered
                    },
                    {
                        text:"Death",
                        content:dead
                    },

                ].map(item => (
                    <Row>
                        <Col>
                            <div className={Styles.card}>
                        <h2 className={Styles.h2}>{item.text}</h2>
                        <h4 className={Styles.p}>{item.content}</h4>
                        </div>
                        </Col>
                    </Row>
                ))
                }
            {/* <div className="card">
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
            </div>   */}
            </Container>
        </div>
    )
}

export default CovidStats
