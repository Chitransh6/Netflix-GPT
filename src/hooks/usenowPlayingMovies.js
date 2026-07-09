import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const NowPlayingMovies=()=>{
   const dispatch = useDispatch();

   const fetchdata = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',options);

    const list = await data.json();
     console.log(list.results);
     dispatch(addnowPlayingMovies(list.results));
}

  useEffect(()=>{
   fetchdata();
},[]);

}
