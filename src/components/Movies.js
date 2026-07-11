
import Movielist from "./Movielist";

const Movies = ({movie,title}) => {
  console.log(movie.nowPlayingMovies[0]);
  return (
    <div className="mb-5 mx-2 flex flex-col gap-4">
     {title && <p className="bg-white w-fit px-2 py-2 rounded-lg text-black text-xl ">
        {title}
      </p>}

      <div className=" flex gap-1 overflow-x-auto no-scrollbar">
        {movie.nowPlayingMovies.map((card) => (
          <div className="shrink-0">
            <Movielist key={card.id} poster={card.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
