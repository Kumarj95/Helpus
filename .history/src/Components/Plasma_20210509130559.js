import React from 'react'
import { useState, useEffect } from 'react'
import './Plasma.css'
const Plasma = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const getPlasma = async () => {
            const plasmaFromServer = await fetchPlasma();
            setInfo(plasmaFromServer);
        }
        getPlasma()
    }, [])

    const fetchPlasma = async () => {
        const res = await fetch('plasma.json');
        const data = await res.json();
        return data
    }
    console.log(info)


    return (
        <>
            <table>
                <div className="Scrollable">
                    <tbody >
                        <tr>

                            <th>Serial Number</th>
                            <th>Name Of Source</th>
                            <th> Availibility Link</th>
                            <th>Contact</th>
                            <th>Special Notes</th>
                            <th>Timeo of Verification</th>
                            <th>Location</th>



                        </tr>

                        {info.map((o,index) => {

                            return <tr key={index}>
                                <td>
                                    {o.SerialNumber}
                                </td>
                                <td>
                                    {o.NameOfSource}
                                </td>
                                <td>
                                    {o.AvailibilityLink}
                                </td>
                                <td>
                                    {o.Contact}
                                </td>
                                <td>
                                    {o.SpecialNotes}
                                </td>
                                <td>
                                    {o.TimeofVerification}
                                </td>
                                <td>
                                    {o.Location}
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


export default Plasma
