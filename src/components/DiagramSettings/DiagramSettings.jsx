import React from 'react'

const DiagramSettings = ({submitValue}) => {
  return (
    <div>
      <select onChange={(e) => submitValue('data', e.target.value)}>
            <option value="null">None</option>
            <option value="online">Online</option>
            <option value="gender">Gender</option>
            <option value="language">Language</option>
            <option value="money">Money</option>
        </select>
        <select onChange={(e) => submitValue('diagram', e.target.value)}>
            <option value="null">None</option>
            <option value="circle">Circle</option>
            <option value="bar">Bar</option>
            <option value="graphic">Graphic</option>
        </select>
    </div>
  )
}

export default DiagramSettings