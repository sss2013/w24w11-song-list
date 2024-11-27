import {useState} from 'react'

const SongInfo = (props) => {
    const [lyricsExpanded,setLyricsExpanded] = useState(false)
    
    const toggleLyrics = () =>{
      setLyricsExpanded(prevState => !prevState)
    }
    return(
      <>
      <div className="container">
        <img src={`https://picsum.photos/600/150?random=${props.song.id}`} alt={`랜덤 이미지${props.song.id}`}
          onClick= {toggleLyrics}></img>
        <a href={`https://www.youtube.com/results?search_query=${props.song.title}`} target = '_blank'
          rel='noreferer'>
          
        <div className="song-title">
            {`${props.song.title} (${props.song.singer})`}</div>
        </a>
      </div>
      {props.song.lyrics && lyricsExpanded && (
        <pre className="song-lyrics">
          {props.song.lyrics}
        </pre>
      )}
      </>
    )
  }

  export default SongInfo