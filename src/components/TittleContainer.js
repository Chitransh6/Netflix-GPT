

const TittleContainer = ({title,overview}) => {
  return (
    <div className="w-screen  absolute mt-80 ml-30 flex flex-col gap-3">
       <p className = "text-5xl text-white font-bold">{title}</p>
       <p className = "w-1/3 text-white text-lg">{overview}</p>
       <div className = "flex gap-4">
        <button className = "bg-gray-400 px-5 py-2 w-26 text-black rounded-lg text-lg hover:bg-gray-500 transition-all opacity-60">
           play
        </button>
        <button className = "bg-gray-400 px-5 py-2 w-26 text-black rounded-lg text-lg hover:bg-gray-500 transition-all opacity-60">
           ( ! ) info
        </button>
       </div>

    </div>
  )
}

export default TittleContainer