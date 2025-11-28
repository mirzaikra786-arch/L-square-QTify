import styles from "./SongsSection.module.css";
import { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from "../Carousal/Carousal";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { collapseClasses } from "@mui/material";
import { borderColor } from "@mui/system";


export default function SongsSection() {
    const [value, setValue] = useState('1');
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [genreList, setGenreList] = useState([]);

    const handleChange = (event, newValue) => {
        filterSongs(songs, newValue);
        setValue(newValue);
    };

    function filterSongs (songsData, genre){
        let filteredList = songsData.filter((song)=>{
            if(song.genre.key === genre) return song;
        });
        setFilteredSongs(filteredList);
    }
    const performAPIcallforSongs = async () => {
        try {
            let response = await axios.get('https://qtify-backend.labs.crio.do/songs');
            setSongs(response.data);
            setFilteredSongs(response.data);
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const performAPIcallforGenre = async () => {
        try {
            let response = await axios.get('https://qtify-backend.labs.crio.do/genres');
            setGenreList((response.data).data);
    
        } catch (err) {
            console.log(err.response.data);
        }
    }


    useEffect((() => {
        performAPIcallforGenre();
        performAPIcallforSongs();
    }), [])

    return (<><hr style={{borderColor: '#34C94B'}}/><section className={styles.songsSection}>
        <div className={styles.titleDiv}>
            <p className={styles.title}>Songs</p>
        </div>
        <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList  onChange={handleChange} aria-label="genre" variant="scrollable" scrollButtons="auto"
                        sx={{
                        '& .MuiTabs-indicator': {
                        backgroundColor: '#34C94B', 
                        },
                        }}>
                            <Tab label="All" value="1" 
                                sx={{
                                color: 'white',
                                opacity: 1,
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: 600,
                                '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                }
                            }}
                            />
                           {genreList.map((genre)=>{
                            return <Tab key={genre.key} label={genre.label} value={genre.key} 
                             sx={{
                                color: 'white',
                                opacity: 1,
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: 600,
                                '&.Mui-selected': {
                                color: 'white',
                                opacity: 1,
                                }}}/>
                           })}
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{
                        '&.MuiTabPanel-root': {
                        paddingLeft: '0px', 
                        paddingRight: '0px',
                        paddingBottom: '0px'
                        },
                        }}><Carousel data={songs} fromSongsSection={true} 
                    
                    /></TabPanel>
                     {genreList.map((genre)=>{
                            return <TabPanel  key={genre.key} value={genre.key}
                            sx={{
                                '&.MuiTabPanel-root': {
                                paddingLeft: '0px', 
                                paddingRight: '0px',
                                },
                                }}>
                            <Carousel data={filteredSongs} fromSongsSection={true} /></TabPanel>
                           })}
                </TabContext>
            </Box>
        </div>
        
    </section>
    <hr style={{borderColor: '#34C94B'}}/>
    </>)
}