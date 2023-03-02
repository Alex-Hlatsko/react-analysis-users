import React from 'react'
import './styles.css'

const Filter = ({submitValue}) => {
    
  return (
    <div className='filter'>
      <h1>Online</h1>
      <select onChange={(e) => submitValue('online', e.target.value)}>
          <option value="null">All</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
      </select>

      <h1>Language</h1>
      <select onChange={(e) => submitValue('language', e.target.value)}>
          <option value="null">All</option>
          <option value="English">English</option>
          <option value="Belarusian">Belarusian</option>
          <option value="French">French</option>
          <option value="Tswana">Tswana</option>
          <option value="Khmer">Khmer</option>
          <option value="Kashmiri">Kashmiri</option>
          <option value="Somali">Somali</option>
      </select>

      <h1>Gender</h1>
      <select onChange={(e) => submitValue('gender', e.target.value)}>
          <option value="null">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
      </select>
    </div>
  )
}

export default Filter