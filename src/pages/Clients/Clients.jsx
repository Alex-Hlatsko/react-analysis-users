import React, {useState} from 'react'
import DiagramSettings from '../../components/DiagramSettings/DiagramSettings';
import Diagram from '../../components/Diagram/Diagram';

const Clients = ({users}) => {

  const baseData = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data : [],
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
  };

  const [usersData, setUsersData] = useState(baseData);
  const [settings, setSettings] = useState({
    data: null,
    diagram: null,
  })

  //Settings

  const submitValue = (option, data) => {
    //Change Settings
    if(option === 'data'){
      settings.data = data;

    } else if (option === 'diagram'){
      settings.diagram = data;
    }
    //Set Data
    setUsersData(() => { 
      let result = baseData;
      if(settings.data === 'online' & settings.diagram === 'circle'){
        result.labels = ['Online', 'Ofline'];
        result.datasets[0].data = [(users.filter(e => e.user_online === true)).length, (users.filter(e => e.user_online === false)).length];
      }
      // console.log(result)
      // console.log(settings)
      return result
    })
  }

  return (  
    <>
      <DiagramSettings submitValue={submitValue}/>
      {settings.diagram === 'circle' & settings.option !== null ? <Diagram data={usersData}/> : ""}
    </>
  )
}

export default Clients