import React from 'react'
import {useState, useEffect} from 'react'
import './HospitalBeds.css'
const HospitalBeds = () => {
    const[info, setInfo]= useState([]);
    useEffect(()=>{
        const getBeds =async()=>{
          const bedsFromServer= await fetchBeds();
          setInfo(bedsFromServer);
        }
        getBeds()
      }, [])

      const fetchBeds =async()=>{
        const res= await fetch('hospitalbed.json');
        const data= await res.json();
        return data;
      }
  return (
        <>
<table>
<div className="Scrollable">

    <tbody>
  <tr>

    <th>Serial Number</th>
    <th>Name of Hospital</th>
    <th>Status</th>
    <th>Contact</th>
    <th>Serial Number</th>
    <th>Time of Verification</th>
    <th>City</th>



  </tr>
  {info.map((bed)=>{

      return <tr>
        <td>
            {bed.SerialNumber}
        </td>
        <td>
            {bed.NameOfHospital}
        </td>
        <td>
            {bed.Status}
        </td>
        <td>
            {bed.Contact}
        </td>
        <td>
            {bed.SerialNumber}
        </td>
        <td>
            {bed.TimeofVerification}
        </td>
        <td>
            {bed.City}
        </td>


        
    </tr>
  }
  )
}
  </tbody>
  </div>

</table>

      

        </>
    )
}

export default HospitalBeds
