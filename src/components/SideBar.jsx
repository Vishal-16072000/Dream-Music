import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-black w-[25%] flex-col gap-2 text-white hidden lg:flex'>
        <div className='flex mt-4 ml-[55px] gap-4'>
            <img className='w-7 h-9' src={assets.music_icon}/>
            <h1 className='font-medium flex text-2xl text-[#FE5454]'>Dream<p className='text-[#ffffff]'>Music</p></h1>
        </div>

      <div className='flex flex-col justify-between h-full'>
      <div className='h-full flex flex-col  gap-4 ml-[55px] mt-8'>
            <p className='text-xs font-semibold'>MENU</p>
            <div onClick={() => navigate('/')} className='flex gap-4 cursor-pointer'>
              <img className='w-6' src={assets.home_icon}/>
              <h1 className='text-base font-semibold'>Home</h1>
            </div>
            <div onClick={() => navigate('/')} className='flex gap-4 cursor-pointer'>
              <img className='w-6' src={assets.trend_icon}/>
              <h1 className='text-base font-semibold'>Trending</h1>
            </div>
            <div onClick={() => navigate('/')} className='flex gap-4 cursor-pointer'>
              <img className='w-6' src={assets.library_icon}/>
              <h1 className='text-base font-semibold'>Library</h1>
            </div>
            <div onClick={() => navigate('/')} className='flex gap-4 cursor-pointer'>
              <img className='w-6' src={assets.compass_icon}/>
              <h1 className='text-base font-semibold'>Discover</h1>
            </div>
        </div>

        <div className='flex flex-col gap-4 ml-[55px] mt-8 mb-10'>
            <p className='text-xs font-semibold'>GENERAL</p>
            <div className='flex gap-4'>
              <img className='w-6' src={assets.setting_icon}/>
              <h1 className='text-base font-semibold'>Settings</h1>
            </div>

            <div className='flex gap-4'>
              <img className='w-6' src={assets.logout_icon}/>
              <h1 className='text-base font-semibold'>Logout</h1>
            </div>
        </div>

      </div>
        

    </div>

  )
}

export default SideBar