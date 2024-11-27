import './App.css';
import SongInfo from './SongInfo.js'

const App = () => {
  const songs = [
    {
      id: 1,
      title: "Glacial love",
      singer: "Siam Shade",
      rating: 5,
      lyrics:`Ah こんなにも愛してる人なのに
      Break 時と共に傷付けて行くだけで
      何もしてあげられない
      この想い上手く言葉に出来ずに 曇る君の瞳の中
      思わず漏れた溜息 すれ違う二人の心にこだまする`,
    },
    {
      id: 2,
      title: "Diver",
      singer: "Nico touches the walls",
      rating: 3,
      lyrics: null,
    },
    {
      id: 3,
      title: "HOWEVER",
      singer: "Glay",
      rating: 3,
      lyrics: null,
    },
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
        props.listSong.map(song => 
          <SongInfo key={song.id} song={song}/>
        )
      }
    </div>
  )
}


export default App;
