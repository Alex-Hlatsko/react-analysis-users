import React from 'react'

const DiagramFilter = ({submitValue}) => {
  return (
    <div className='filter'>
        <select onChange={(e) => submitValue('value', e.target.value)}>
            <option value="null">None</option>
            <option value="people">People</option>
        </select>
        <select onChange={(e) => submitValue('type', e.target.value)}>
            <option value="null">None</option>
            <option value="pie">Pie</option>
        </select>
    </div>
  )
}

export default DiagramFilter