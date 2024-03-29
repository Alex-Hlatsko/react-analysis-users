import React from 'react'
import ReactPaginate from 'react-paginate';
import './styles.css'

const Table = ({users, pageCount, handlePageClick}) => {

  return (
    <div className='mt-4 flex flex-col items-center'>
      <table>
        {/* Table Header */}
        <thead>
          <tr className=' '>
            <th>Name</th>
            <th>Contact</th>
            <th>Money</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {users.map(e => (
          <tr key={e?.user_id}>
            {/* Name Column */}
            <td>
              <div className="flex items-center text-start">
                <img src={e.user_img} alt="user_img" className='rounded-full mr-2' style={{backgroundColor: e.user_theme}}/>
                <div>
                  <h1 className=' font-semibold'>{e.user_first_name} {e.user_last_name}</h1>
                  {e.user_online ? 
                  <p className='inline px-1 border-solid border-2 border-green-500 text-green-500 font-semibold'>Online</p>
                  :
                  <p className='inline px-1 border-solid border-2 border-red-500 text-red-500 font-bold'>Offline</p>}
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

      <div className="table__mobile">
        {users.map(e => (
          <div className="table__mobile__user">
            <div className="user__content">
              <div className="user__img">
                <img src={e.user_img} alt="" style={{backgroundColor: e.user_theme}}/>
              </div>            
              <div className="user__info">
                <h1 className="user__name">{e.user_first_name} {e.user_last_name}</h1>
                <p className="user__city">{e.user_city}</p>
                <p className="user__language">Language: <span>{e.user_language}</span></p>
                <p className="user__gender">Gender: <span>{e.user_gender}</span></p>
                <p className="user__contact">Email: <span> <a href={"mailto:" + e.user_email}>{e.user_email}</a></span></p>         
              </div>    
            </div> 
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Table