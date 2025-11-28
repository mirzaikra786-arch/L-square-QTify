import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Navbar/Navbar"
import AlbumDetail from './AlbumDetails/AlbumDetails';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import Landing from './Landing';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
        <Navbar/>
    <Routes>
    <Route path='/' Component={Landing}></Route>
    <Route path='/AlbumDetail/:Album_id' Component={AlbumDetail}></Route>
  </Routes>
  <AudioPlayer/>    
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
