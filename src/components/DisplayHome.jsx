import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'



const DisplayHome = () => {
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
        <h1 className='ml-2 my-5 mb-2 text-2xl font-bold lg:ml-0'>Albums</h1>
        <div className=' flex overflow-auto'>
            {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
        </div>

        <div className='mb-4'>
        <h1 className='my-5 text-2xl font-bold'>Today's biggest hits</h1>
        <div className=' flex overflow-auto'>
            {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
        </div>
    </>
  )
}

export default DisplayHome