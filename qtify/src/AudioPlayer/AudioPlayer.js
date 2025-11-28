import React from 'react';
import ReactPlayer from 'react-player';
import { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.css';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import poster from '../assets/ArijitPoster.jpg';
import wave from '../assets/wave.jpg';

function AudioPlayer() {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0)
  const [totalDuration,setTotalDuration] = useState(0)
  const ele = useRef(null)
  const inputRange = useRef(null)

  const handlePlay = (value) => {
    setPlay(value);
  }
  
  const handleDuration=(e)=>{
    setDuration(Math.floor((e.timeStamp)));
  }

  useEffect(() => {
    inputRange.current.value = duration/1000;
  }, [duration])

  useEffect(() => {
    if (play === true) {
      ele.current.play();
    } else {

    }
  }, [play])
  return (<>
    <div className={styles.tobeFixed}>
      <hr style={{ boxShadow: '0px -2px 6px 0px #FFFFFF59', margin: '5px 0px' }} />
      <div className={styles.playerDiv}>
        <img className={styles.poster} src={poster} alt='Poster'></img>
        <button onClick={() => handlePlay(!play)} className={styles.playButton}>{play ? <PauseIcon /> : <PlayArrowIcon />}</button>
        <img className={styles.Waveposter} src={wave} alt='wave'></img>
      </div>
      <div className={styles.rangeDiv}>
        <span className={styles.time}>{Math.floor((duration/60000)/60)}:{Math.floor(duration/60000)}:{((duration%60000)/1000).toFixed(0)}</span>
        <input ref={inputRange} type='range' min="0" max={totalDuration} step="1" style={{ width: '70%', margin: '5px', accentColor: '#34C94B' }} />
        <span className={styles.time}>{Math.floor((totalDuration/60/60))}:{Math.floor(((totalDuration/60)%60))}:{Math.floor((totalDuration%60))}</span>
      </div>
    </div>
    <ReactPlayer style={{ visibility: 'hidden' }} onDurationChange={(e)=>{setTotalDuration(e.srcElement.api.getDuration())}} onTimeUpdate={(e)=>handleDuration(e)} ref={ele} src='https://youtu.be/00DvaPstcpo?si=Z37NZ3nEGNqO2uMG' controls={false} playing={play} loop={true} />
  </>
  );
}

export default AudioPlayer;