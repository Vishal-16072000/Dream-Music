import React from 'react'
import { assets, songsData } from '../assets/assets'
import SongItem from './SongItem'


const Navbar = () => {
  return (
    <div>
        <div className='mb-3 flex gap-4 block lg:hidden'>
            <img className='w-7 h-9' src={assets.music_icon}/>
            <h1 className='font-medium flex text-2xl text-[#FE5454]'>Dream<p className='text-[#ffffff]'>Music</p></h1>
        </div>
<hr className='block lg:hidden'/>
        <div className='ml-1 font-semibold flex gap-3 items-center mt-4 lg:gap-12 lg:ml-0'>
            <p className='cursor-pointer'>Music</p>
            <p className='cursor-pointer'>Podcast</p>
            <p className='cursor-pointer'>Live</p>
            <p className='cursor-pointer'>Radio</p>
            <div className='w-[110px] h-[28px] ml-5 bg-[#290404] rounded-full flex items-center justify-center gap-2 lg:w-[220px]'>
                <input className="w-[70px] text-white bg-transparent h-4 border-none outline-none text-sm lg:w-[170px]" type="text" name="" />
                <img className='w-4 cursor-pointer' src={assets.search_icon}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar