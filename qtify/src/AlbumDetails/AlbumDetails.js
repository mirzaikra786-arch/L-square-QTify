import React from "react";
import styles from "./AlbumDetails.module.css";
import { useParams, Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import axios from "axios";
import {useState, useEffect} from 'react';
import SongsTable from '../SongsTable/SongsTable'

export default function AlbumDetail(){
    const [data, setData] = useState({})
    const {Album_id} = useParams();
    console.log(Album_id);

    useEffect(()=>{
        getAlbumData(Album_id);
    },[])
     
    const getTotalTime = (data)=>{
        let totalMS = data.songs.reduce((MS, eachSong)=>{
          return  MS + eachSong.durationInMs
        }, 0)
        let min = Math.floor((totalMS/1000)/60);
        let sec = Math.floor(totalMS/1000)%60;
        
        return `${min} mins ${sec} secs`
    }

    const getAlbumData = async (Album_id)=>{
        let response = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
        
        let requiredDataTop = (response.data).filter((eachAlbum)=>{
            if(Album_id === `:${eachAlbum.id}`){
                return eachAlbum;
            }
        })
        
        if (requiredDataTop.length > 0){
            setData(requiredDataTop[0]);
        }else{
            let response = await axios.get('https://qtify-backend.labs.crio.do/albums/new');
            
            let requiredData = (response.data).filter((eachAlbum)=>{
            if(Album_id === `:${eachAlbum.id}`){
                return eachAlbum;
            }
        })
        
        setData(requiredData[0]);
        }
    }
    return(<>
        <Link to="/"><button className={styles.backButton}><ArrowBackIcon/></button></Link>
       {data && <div className={styles.albumInfo}>
          <img src={data.image} alt="albumPoster"/>  
           <div className={styles.albumData}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.slug}</p>
            <div className={styles.albumSpecs}>{data.songs && <p> • {(data.songs).length} Songs</p>}  {data.songs && <p> • {getTotalTime(data)}</p>}  <p> • {data.follows} Follows</p></div>
            <div className={styles.shuffleDiv}>
                <button className={styles.shuffle}><ShuffleIcon/>Shuffle</button>
                <button className={styles.addToLib}><PlaylistAddIcon/>Add to library</button>
            </div>
            </div> 
        </div>}
        {/* <SongsTable/> */}
        </>
    )
}