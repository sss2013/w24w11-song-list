import './App.css';
import SongInfo from './SongInfo.js'
import {useState,useEffect} from 'react'
import axios from 'axios'

const SERVER_URL='http://localhost:8080/api/songs'

const App = () => {
  const [songs,setSongs]=useState([])

  const getSong = async () => {
    try{
      const res = await axios.get(SERVER_URL)
      console.log(res)

      setSongs(res.data)
    } catch (err){
      console.log(err)

      setSongs([])
    }
  }

  useEffect(() => {
    getSong() 
  } ,[])


  return (
    <div>
      <Header />
      <Playlist 
        title = "프로그래밍하면서 듣고 싶은 노래"
        listSong={songs}/>
    </div>
  )
}

function Header() {
  return (
    <div className="playlist">React 프로그래밍</div>
  )
}

const Playlist = ({title,listSong}) => {
  return (
    <div className='playlist'>
      <div className='playlist'>{title}</div>
      {
        props.listSong.map(song => 
          <SongInfo key={song.id} song={song}/>
        ) 
      }
    </div>
  )
}

export default App;
