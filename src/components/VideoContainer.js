import { useEffect,useState } from "react";
import { options } from "../utils/constants"


const VideoContainer = () => {
    
    const [trailerkey,setTrailerkey] = useState("");

    useEffect(()=>{

    const fatchTrailer = async()=>{
        

      const data = await fetch('https://api.themoviedb.org/3/movie/1339713/videos?language=en-US', options)
      const videos = await data.json();
      

      const trailer = videos.results.filter((obj) => obj.type === "Trailer");
   
      setTrailerkey(trailer[0].key);
    }

    fatchTrailer();

    },[])

    


  return (
    <div className=" w-full aspect-video overflow-hidden bg-black">
  <iframe 
    className=" absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    src={`https://www.youtube.com/embed/${trailerkey}?si=_u5FWardpWfhra4c&modestbranding=1&autoplay=1&mute=1&controls=0&loop=1&cc_load_policy=0&iv_load_policy=3&playlist=${trailerkey}`}
    title="YouTube video player"
    allow="autoplay; encrypted-media"
  ></iframe>
</div>
  )
}

export default VideoContainer