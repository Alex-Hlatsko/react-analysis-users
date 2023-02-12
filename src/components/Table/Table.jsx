import React from 'react'

const Table = ({users}) => {
  return (
    <table>
        {/* Table Header */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Money</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {users.map(e => (
          <tr key={e.user_id}>
            {/* Name Column */}
            <td>
              <div className="flex items-center">
                <img src={e.user_img} alt="user_img" className='rounded-full' style={{backgroundColor: e.user_theme}}/>
                <div>
                  <h1>{e.user_first_name} {e.user_last_name}</h1>
                  {e.user_online ? 
                  <p className='text-green-500'>Online</p>
                  :
                  <p className='text-red-500'>Offline</p>}
                </div>
              </div>
            </td>
            {/* Contact Column */}
            <td>
              <p>{e.user_email}</p>
            </td>
            {/* Money Column */}
            <td>
              <p>{e.user_cash}</p>
            </td>
          </tr>
          ))}
        </tbody>

      </table>
  )
}

export default Table