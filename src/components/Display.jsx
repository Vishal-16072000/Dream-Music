import React from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import RightSideBar from './RightSideBar'

const Display = () => {
  return (
    <div className='h-screen w-[100%] px-1 pt-4 text-white overflow-auto lg:w-[58%] lg:ml-0 lg:px-6' style={{background:"linear-gradient(to top, Transparent 0%,Transparent 0%,black 0%, #530101 100%"}}>
       <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
            <Route path='/album/:id' element={<RightSideBar/>}/>
       </Routes>
    </div>
  )
}

export default Display