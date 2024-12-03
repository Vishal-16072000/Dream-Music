import React, { useContext } from 'react'
import { albumsData, assets, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext';

const RightSideBar = () => {
    const {seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong} = useContext(PlayerContext);

    const {id} = useParams();

    const albumData = albumsData[0];
    // console.log(id);
  return (
    <>
        <div className='h-screen bg-black w-[22%] flex-col items-center justify-end gap-2 text-white hidden lg:flex'>
            <div className='w-56 h-72 rounded-lg bg-[#9b0303] mb-5'>
                <div className='w-full flex justify-center h-12 items-center font-bold text-sm'><h1>Now Playing</h1></div>
                <div className='flex justify-center'>
                    <img className='w-24 rounded-xl' src={track.image} alt=''/>
                </div>
                <div className='flex flex-col items-center font-bold text-sm mt-3'>
                    <h1>{track.name}</h1>
                    <h1 className='font-normal'>{track.singer}</h1>
                </div>
                <div className='flex gap-2 justify-center mt-3'>
                    <p className='text-sm font-medium'>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='bg-white cursor-pointer h-1 w-32 rounded-full mt-2'>
                        <hr ref={seekBar}  className='cursor-pointer w-0 rounded bg-neutral-900  h-1 border-none'/>
                    </div>
                    <p className='text-sm font-medium'>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
                <div className='flex h-5 mt-5 items-center'>
                    <img className='w-4 ml-7 cursor-pointer' src={assets.loop_icon}/>
                    <img onClick={previous} className='w-4 ml-6 cursor-pointer' src={assets.prev_icon}/>
                    {playStatus ? 
                    <img onClick={pause} className='w-6 ml-4 cursor-pointer' src={assets.pause_icon}/>
                    :
                    <img onClick={play} className='w-6 ml-4 cursor-pointer' src={assets.play_icon}/>

                    }

                    <img onClick={next} className='w-4 h-4 ml-4 cursor-pointer' src={assets.next_icon}/>
                    <img className='w-4 ml-6' src={assets.shuffle_icon}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default RightSideBar