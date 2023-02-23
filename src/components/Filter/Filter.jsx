import React from 'react'
import './styles.css'

const Filter = ({submitValue}) => {
    
  return (
    <div className='filter'>
        <select onChange={(e) => submitValue('online', e.target.value)}>
            <option value="null">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
        </select>
        <select onChange={(e) => submitValue('language', e.target.value)}>
            <option value="null">All</option>
            <option value="Tswana">Tswana</option>
            <option value="Khmer">Khmer</option>
        </select>
        <select onChange={(e) => submitValue('gender', e.target.value)}>
            <option value="null">All</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
    </div>
  )
}

export default Filter