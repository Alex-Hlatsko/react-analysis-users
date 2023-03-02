import React, { useState } from 'react'
import Diagram from '../../components/Diagram/Diagram'
import DiagramFilter from '../../components/DiagramFilter/DiagramFilter'
import './styles.css'

const Clients = ({ users }) => {
    //Data for Diagram
    const [diagramData, setDiagramData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Analize your users',
                data: [],
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
                labels: ['Online', 'Offline'],
                datasets: [
                    {
                        type: 'pie',
                        label: 'Online and Offline Users',
                        data: [(users.filter((e)=>e.user_online === true)).length, (users.filter((e)=>e.user_online === false)).length],
                        backgroundColor: [
                            'rgba(166, 30, 238, 0.4)',
                            'rgba(245, 164, 36, 0.4)',
                        ],
                        borderColor: [
                            'rgba(166, 30, 238, 1)',
                            'rgba(245, 164, 36, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
        if(diagramSettings.value === 'people' & diagramSettings.type === 'bar'){
            setDiagramData({
                labels: ['Online', 'Offline'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Online and Offline Users',
                        data: [(users.filter((e)=>e.user_online === true)).length, (users.filter((e)=>e.user_online === false)).length],
                        backgroundColor: [
                            'rgba(166, 30, 238, 0.4)',
                            'rgba(245, 164, 36, 0.4)',
                        ],
                        borderColor: [
                            'rgba(166, 30, 238, 1)',
                            'rgba(245, 164, 36, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
        if(diagramSettings.value === 'gender' & diagramSettings.type === 'pie'){
            setDiagramData({
                labels: ['Female', 'Male'],
                datasets: [
                    {
                        type: 'pie',
                        label: 'Genders',
                        data: [(users.filter((e)=>e.user_gender === 'Male')).length, (users.filter((e)=>e.user_gender === 'Female')).length],
                        backgroundColor: [
                            'rgba(166, 30, 238, 0.4)',
                            'rgba(245, 164, 36, 0.4)',
                        ],
                        borderColor: [
                            'rgba(166, 30, 238, 1)',
                            'rgba(245, 164, 36, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
        if(diagramSettings.value === 'gender' & diagramSettings.type === 'bar'){
            setDiagramData({
                labels: ['Female', 'Male'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Genders',
                        data: [(users.filter((e)=>e.user_gender === 'Male')).length, (users.filter((e)=>e.user_gender === 'Female')).length],
                        backgroundColor: [
                            'rgba(166, 30, 238, 0.4)',
                            'rgba(245, 164, 36, 0.4)',
                        ],
                        borderColor: [
                            'rgba(166, 30, 238, 1)',
                            'rgba(245, 164, 36, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
        }
        if(diagramSettings.value === null || diagramSettings.type === null){
            setDiagramData({
                labels: [],
                datasets: [
                    {
                        type: '',
                        label: '',
                        data: [],
                        backgroundColor: [
                            '',
                        ],
                        borderColor: [
                            '',
                        ],
                        borderWidth: 0,
                    },
                ],
            })
        }
    }

    return (
        <div className='section'>
            <div className="diagramFilter">
                <DiagramFilter submitValue={submitValue}/>
            </div>
            <div className="diagrams">
                <div className="diagram">
                    <Diagram data={diagramData} />
                </div>
            </div>
        </div>
    )
}


export default Clients