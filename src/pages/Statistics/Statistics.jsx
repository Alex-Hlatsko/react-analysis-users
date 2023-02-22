import React, {useState} from 'react'
import Table from '../../components/Table/Table'
import Filter from '../../components/Filter/Filter'

const Statistics = ({users}) => {
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  const [usersData, setUsersData] = useState(users);


  //Sorted Data

  const filterSettings = {
    online: null,
    gender: null,
    language: null,
  }

  const submitValue = (option, data) => {
    if(option === 'online'){
      data === "null" ? filterSettings.online = null : filterSettings.online = data;
      
    } else if (option === 'language'){
      data === "null" ? filterSettings.language = null : filterSettings.language = data;
      
    } else if (option === 'gender'){
      data === "null" ? filterSettings.gender = null : filterSettings.gender = data;
      
    }

    setUsersData(
      users.filter((e) => {
        let data = users; 
        if(filterSettings.online !== null){
          data = e.user_online === (filterSettings.online === "online" ? true : false)
    
        }
        if(filterSettings.gender !== null){
          data = e.user_gender === filterSettings.gender
    
        }
        if(filterSettings.language !== null){
          data = e.user_language === filterSettings.language
    
        }
        return data
      })
    )
  }


  // const usersData = users.filter((e) => {
  //   let data = users; 
  //   if(filterSettings.online !== null){
  //     data = e.user_online === (filterSettings.online === "online" ? true : false)

  //   }
  //   if(filterSettings.gender !== null){
  //     data = e.user_gender === filterSettings.gender

  //   }
  //   if(filterSettings.language !== null){
  //     data = e.user_language === filterSettings.language

  //   }
  //   return data
  // })
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = usersData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(usersData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usersData.length;
    setItemOffset(newOffset);
  };

  return (
      <>
        <Filter submitValue={submitValue}/>
        <Table users={currentItems} pageCount={pageCount} handlePageClick={handlePageClick}/>
      </>
  )
}

export default Statistics