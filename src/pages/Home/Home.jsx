import React from 'react'
import Table from '../../components/Table/Table'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = ({users}) => {
  console.log(users)
  return (
    <>
      <Header/>
      <Table users={users}/>
      <Footer/>
    </>
  )
}

export default Home