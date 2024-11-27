
function Container(props){
    return(
      <div className="container">
        <a href={`https://www.youtube.com/results?search_query=${props.title}`}>
          <img src={`https://picsum.photos/600/150?random=${props.index}`} alt={`랜덤 이미지${props.index}`}></img>
          <div className="song-title">{props.title}</div>
        </a>
      </div>
    )
  }

  export default Container