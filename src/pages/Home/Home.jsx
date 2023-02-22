import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="mt-6 m-auto w-11/12 flex justify-between items-center">
      <div className="content w-1/2">
        <h1 className='text-4xl font-semibold'>Сontrol your business</h1>
        <p className='text-base text-gray-600 w-5/6 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis commodi, veritatis adipisci necessitatibus, temporibus similique aliquam unde minus sapiente exercitationem ipsum!</p>
        <button className='mt-8'><Link to="/statistics" className='btn'>Start</Link></button>
      </div>
      <div className="img w-1/2">
        <img src="./img/home.png" alt="" />
      </div>
    </div>
  )
}

export default Home;