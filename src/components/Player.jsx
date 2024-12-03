import React, { useContext } from 'react'

import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const {track,seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 block lg:hidden'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt=""/>
        <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className="w-7 cursor-pointer" src={assets.shuffle_icon}/>
          <img onClick={previous} className="w-6 cursor-pointer" src={assets.prev_icon}/>
          
          {playStatus ?
          <img onClick={pause} className="w-7 cursor-pointer" src={assets.pause_icon}/>
          :
          <img onClick={play} className="w-7 cursor-pointer" src={assets.play_icon}/>
          }
          <img onClick={next} className="w-6 cursor-pointer" src={assets.next_icon}/>
          <img className="w-7 cursor-pointer" src={assets.loop_icon}/>
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='w-0 h-1 border-none rounded-full bg-orange-600'/>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
    </div>
  )
}

export default Player