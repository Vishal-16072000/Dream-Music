import React, { useContext, useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import Display from './components/Display';
import RightSideBar from './components/RightSideBar';
import { PlayerContext } from './context/PlayerContext';
import Player from './components/Player';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);


  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const updateScreenSize = () => {
    setIsMobileScreen(window.innerWidth <= 768); 
  };

  useEffect(() => {
    updateScreenSize();

  
    window.addEventListener('resize', updateScreenSize);


    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div className='h-screen bg-black'>
      <div className='h-90 flex'>
        <SideBar />
        <Display />
        <RightSideBar />
      </div>
      
      {isMobileScreen && <Player />}
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
