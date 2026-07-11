import Movies from "./Movies"
import { useSelector } from "react-redux";
const SecondContainer = () => {

  const movie = useSelector((state)=> state.movies);
 if(!movie.nowPlayingMovies) return;

  return (
    <div className="absolute z-20 mt-[-300px] w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-32 ">
    <div className ="bg-black px-4 flex flex-col gap-8 pb-20">
          <Movies movie = { movie}/>
          <Movies movie = { movie} title = "Realeased Movies"/>
          <Movies movie = { movie} title = "Now Playing Movies"/>
          <Movies movie = { movie} title = "Now Playing Movies"/>
    </div>
    </div>
  )
}

export default SecondContainer;