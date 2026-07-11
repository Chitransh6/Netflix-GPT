import Header from "./header"
import { NowPlayingMovies } from "../hooks/usenowPlayingMovies.js";
import FirstContainer from "./firstContainer.js";
import SecondContainer from "./secondContainer.js";


const Browse = () => {

   NowPlayingMovies();

  return (

    <div className = "overflow-x-hidden bg-black">
      <Header/>
     <FirstContainer/>
     <SecondContainer/>
      
    </div>
  )
}

export default Browse