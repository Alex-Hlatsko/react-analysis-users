import React, { useState } from 'react'
import Diagram from '../../components/Diagram/Diagram'
import DiagramFilter from '../../components/DiagramFilter/DiagramFilter'

const Clients = ({ users }) => {
    //Data for Diagram
    const [diagramData, setDiagramData] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    })

    const [diagramSettings, setDiagramSettings] = useState({
        type: null,
        value: null,
    })

    // const [counter, setCounter] = useState(0)

    const submitValue = (setting, value) => {
        if(setting === 'value'){
            diagramSettings.value = (value === 'null' ? null : value)
        }
        if(setting === 'type'){
            diagramSettings.type = (value === 'null' ? null : value)
        }

        console.log(diagramSettings)

        if(diagramSettings.value === 'people' & diagramSettings.type === 'pie'){
            setDiagramData({
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [(users.filter((e)=>e.user_online === true)).length, (users.filter((e)=>e.user_online === false)).length],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
        // setCounter(counter+1)
    }

    return (
        <>
            <Diagram data={diagramData} />
            <DiagramFilter submitValue={submitValue}/>
        </>
    )
}

export default Clients