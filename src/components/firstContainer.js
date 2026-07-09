import { useSelector } from "react-redux";
import  TittleContainer  from "./TittleContainer";
import VideoContainer from "./VideoContainer";

const FirstContainer = () => {
    const data = useSelector(state => state.movies?.nowPlayingMovies)
 
 if(!data) return;
 console.log(data[0]);



  return (
    <div>
         <TittleContainer title = {data[0].original_title
} overview = {data[0].overview} />

         <VideoContainer/>   
    </div>
  )
}

export default FirstContainer