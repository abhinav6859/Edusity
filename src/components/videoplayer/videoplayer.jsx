import React, { useRef } from 'react'
import './videoplayer.css'
import video from '../../assets/video.mp4'

const videoplayer = ({isVideoVisible, setIsVideoVisible}) => {
const player = useRef(null);

  const closeplayer = (e) => {
    if (e.target === player.current) {
      setIsVideoVisible(false);
    }
  }

  return (
    <div className={`video-player ${isVideoVisible ? '' : 'hide'}`} ref={player}
    onClick={closeplayer}>
     <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default videoplayer
