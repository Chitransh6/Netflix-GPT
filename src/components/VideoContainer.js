import { useEffect,useState } from "react";
import { options } from "../utils/constants"


const VideoContainer = () => {
    
    const [trailerkey,setTrailerkey] = useState("");

    useEffect(()=>{

    const fatchTrailer = async()=>{
        

      const data = await fetch('https://api.themoviedb.org/3/movie/1339713/videos?language=en-US', options)
      const videos = await data.json();
      console.log(videos.results);

      const trailer = videos.results.filter((obj) => obj.type === "Trailer");
      console.log(trailer[0]);
      setTrailerkey(trailer[0].key);
    }

    fatchTrailer();

    },[])

    


  return (
    <div className = " aspect-video  "><iframe className = "w-screen aspect-video "
       src={`https://www.youtube.com/embed/${trailerkey}?si=_u5FWardpWfhra4c`}
        title="YouTube video player"
           ></iframe></div>
  )
}

export default VideoContainer