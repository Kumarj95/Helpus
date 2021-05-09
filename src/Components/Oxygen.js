import React from 'react'
import { useState, useEffect } from 'react'
import './Oxygen.css'
const Oxygen = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const getOxygen = async () => {
            const oxygenFromServer = await fetchOxygen();
            setInfo(oxygenFromServer);
        }
        getOxygen()
    }, [])

    const fetchOxygen = async () => {
        const res = await fetch('oxygen.json');
        const data = await res.json();
        return data
    }
    console.log(info)


    return (
        <>
            <table>

                    <tbody className="Scrollable1">
                        <tr className="tr4">

                            <th className="th">Serial Number</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Refill</th>
                            <th>Contact</th>
                            <th>Additional Info</th>
                            <th>Time of Verification</th>
                            <th>City</th>



                        </tr>

                        {info.map((o,index) => {

                            return <tr key={index} className="tr3">
                                <td>
                                    {o.SerialNumber}
                                </td>
                                <td>
                                    {o.Name}
                                </td>
                                <td>
                                    {o.Status}
                                </td>
                                <td>
                                    {o.Refill}
                                </td>
                                <td>
                                    {o.Contact}
                                </td>
                                <td>
                                    {o.AdditionalInfo}
                                </td>
                                <td>
                                    {o.TimeOfVerification}
                                </td>
                                <td>
                                    {o.City}
                                </td>



                            </tr>
                        }
                        )
                        }
                    </tbody>

            </table>



        </>
    )
}


export default Oxygen
