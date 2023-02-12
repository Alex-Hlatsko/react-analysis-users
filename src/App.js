import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import Home from './pages/Home/Home';

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
      <Route path='/' element={<Home users={usersData}/>}/>
    </Routes>
  );
}

export default App;
