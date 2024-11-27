import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Playlist/>
      <Container/>
    </div>
  );
}

function Playlist() {
  return (
    <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>
  )
}

function Header(){
  return (
    <h1>React 프론트엔드 프로그래밍</h1>
  )
}

function Container(){
  return(
    <div className="container">
      <a href="https://www.youtube.com/results?search_query=Dear..">
        <img src="https://picsum.photos/600/150?random=1" alt="랜덤 이미지1"></img>
        <div className="song-title">Dear..</div>
      </a>
    </div>
  )
}

export default App;
