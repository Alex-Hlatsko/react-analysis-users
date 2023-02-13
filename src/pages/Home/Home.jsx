import React, {useState} from 'react'
import Table from '../../components/Table/Table'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = ({users}) => {
  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Header/>
      <Table users={currentItems} pageCount={pageCount} handlePageClick={handlePageClick}/>
      <Footer/>
    </>
  )
}

export default Home;