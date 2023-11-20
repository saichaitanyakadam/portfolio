import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const {nightMode}=useContext(AppContext)
  return (
    <div className={`${nightMode&& "bg-[#333]"}`}>Home</div>
  )
}

export default Home