import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({id, name, image, desc}) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded  cursor-pointer hover:bg-[#ffffff26]'>
        <img className='w-[150px] rounded' src={image} alt=''/>
        <p className='w-[150px] h-12 overflow-auto font-bold mt-2 mb-1'>{name}</p>
        <p className='w-[150px] h-12 text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem