import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './telegram.css'
// import {Table} from 'react-bootstrap'
const TelegramGroups = () => {
    const channels=[
        {group:"MyGov Corona Newdesk",link:"https://t.me/MyGovCoronaNewsdesk",verified:"Yes"},{group:"Covid-19 Kerela",link:"https://t.me/COVID19_Kerala",verified:"Yes"},{group:"India Fights with Covid- A Sonu Sood initiative",link:"https://t.me/IndiaFightsWithCovid",verified:"Yes"},{group:"CovidPatna",link:"https://t.me/CovidPatna",verified:"No"},{group:"CovidAhemdabad",link:"https://t.me/CovidAhmedabad",verified:"No"},{group:"CovidBengaluru",link:"https://t.me/CovidBengaluru",verified:"No"},{group:"covidBhopal",link:"https://t.me/covidbhopal",verified:"No"},{group:"CovidChandigarh",link:"https://t.me/CovidChandigarh",verified:"No"},{group:"CovidCoimbatore",link:"https://t.me/CovidCoimbatore",verified:"No"},{group:"CovidHyderabad",link:"https://t.me/CovidHyderabad",verified:"No"},{group:"CovidIndore",link:"https://t.me/CovidIndore",verified:"No"},{group:"CovidJaipur",link:"https://t.me/CovidJaipur",verified:"No"},{group:"CovidJodhpur",link:"https://t.me/CovidJodhpur",verified:"No"},{group:"CovidKolkata",link:"https://t.me/CovidKolkata",verified:"No"},{group:"CovidLucknow",link:"https://t.me/CovidLucknow ",verified:"No"},{group:"CovidMumbai",link:"https://t.me/CovidMumbai",verified:"No"},{group:"CovidNCR",link:"https://t.me/CovidNCR",verified:"No"},{group:"CovidNagpur",link:"https://t.me/CovidNagpur",verified:"No"}
    ]
    const renderchannels = (channel,index)=>{
        return(
            <tr key={index}>
                <td>{channel.group}</td>
                <td>{channel.link}</td>
                <td>{channel.verified}</td>
            </tr>
        )
    }
    return (
        <div className="abc">
            <ReactBootStrap.Table striped bordered hover>
  <thead className="th">
    <tr className="tr">
      <th>Telegram Group</th>
      <th>Link for the Group</th>
      <th>Verified (Yes/No)</th>
    </tr>
  </thead>
  <tbody className="tb">
      {channels.map(renderchannels)}
  </tbody>
</ReactBootStrap.Table>  
        </div>
    )
}

export default TelegramGroups
