import './App.css';
import Container from './Container.js'

const App = () => {
  const songs = [
    'Dear..',
    'Diver',
    'Soul love',
  ]

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

const Playlist = props => {
  return (
    <div className='playlist'>
      <div className='playlist'>{props.title}</div>
      {
        props.listSong.map((song,index)=> (
          <Container key={index} title={song} index={index}/>
        ))
      }
    </div>
  )
}


export default App;
