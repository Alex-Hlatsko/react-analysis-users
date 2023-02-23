import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Home from './pages/Home/Home';
import Statistics from './pages/Statistics/Statistics';
import Clients from './pages/Clients/Clients';
import Layout from './components/Layout/Layout';

function App() {

  const [usersData, setUsersData] = useState([]);
  
  //Get users data
  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/Alex-Hlatsko/react-analysis-users/master/public/data.json";

    axios.get(URL)
    .then(res => {
      setUsersData(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [setUsersData])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home users={usersData}/>}/>
        <Route path='/statistics' element={<Statistics users={usersData}/>}/>
        <Route path='/clients' element={<Clients users={usersData}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
