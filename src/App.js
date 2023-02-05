import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Home from './pages/Home/Home';
import Users from  './pages/Users/Users';
import Analysis from './pages/Analysis//Analysis';

function App() {

  const [usersData, setUsersData] = useState();

  //Get data function
  const fetchDataJSON = async() => {
    const URL = "link"
    await axios.get(URL)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  useEffect(() => {
    const users = fetchDataJSON();
    setUsersData(users);
  }, [])
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/analysis' element={<Analysis/>}/>
    </Routes>
  );
}

export default App;
