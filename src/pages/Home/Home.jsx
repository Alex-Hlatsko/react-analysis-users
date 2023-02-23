import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => {

  return (
    <div className="mt-6 m-auto w-11/12 flex justify-between items-center">
      <div className="content w-1/2">
        <h1 className='title font-semibold'>Сontrol your business</h1>
        <p className='sub_title w-5/6 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis commodi, veritatis adipisci necessitatibus, temporibus similique aliquam unde minus sapiente exercitationem ipsum!</p>
        <Link to="/statistics"><button className='mt-8 btn'>Start</button></Link>
      </div>
      <div className="img w-1/2">
        <img className=' w-8/12 m-auto' src="./img/home.svg" alt="" />
      </div>
    </div>
  )
}

export default Home;