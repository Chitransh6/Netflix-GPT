import Header from "./header"
import { NowPlayingMovies } from "../hooks/usenowPlayingMovies.js";
import FirstContainer from "./firstContainer.js";
import SecondContainer from "./secondContainer.js";


const Browse = () => {

   NowPlayingMovies();

  return (

    <div>
      <Header/>
     <FirstContainer/>
     <SecondContainer/>
      
    </div>
  )
}

export default Browse