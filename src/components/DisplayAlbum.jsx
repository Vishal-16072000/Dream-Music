import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const {id} = useParams();
// console.log(id);
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);
  return (
    <>
        <Navbar/>
        <div className='mt-10 flex justify-center gap-8 flex-col justify-center md:flex-row md:items-end'>
            <img className='w-[90%] h-[10%] rounded' src={assets.Michel_Jackson_png} alt={albumData.name}/>
            <div className='flex flex-col'>

            </div>
        </div>
        <div className='font-bold text-sm grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-16 lg:mr-20'>#</b>TITLE</p>
            <p className='ml-12 hidden sm:block ml-36'>PLAYING</p>
            <p className='ml-24 lg:ml-24'>TIME</p>
            <p className='ml-12 lg:ml-12'>ALBUM</p>
            {/* <img className='m-auto w-4' src={assets.clock_icon} alt=''/> */}
        </div>
        {/* <hr/> */}
        {songsData.map((item, index) => (
            <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#9b0303] cursor-pointer'>
                <p className='text-white w-72 overflow-hidden'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline w-10 mr-2 lg:mr-4' src={item.image}/>
                    {item.name.slice(0, 15)}
                </p>
                <p className='ml-36 w-20 overflow-hidden hidden sm:block text-[15px]'>{albumData.name}</p>
                <p className='ml-24 text-[15px] text-center lg:ml-12'>{item.duration}</p>
                <p className='ml-8 text-[15px] h-5 overflow-hidden lg:ml-7'>{albumData.name}</p>
            </div>
        ))}
    </>
  )
}

export default DisplayAlbum