

const TittleContainer = ({title,overview}) => {
  return (
    <div className="z-10 absolute mt-80 ml-30 flex flex-col gap-3">
       <p className = "text-5xl text-white font-bold">{title}</p>
       <p className = "w-1/3 text-white text-lg">{overview}</p>
       <div className = "flex gap-4">
        <button className = "bg-white px-5 py-2 w-26 text-black rounded-lg text-lg hover:opacity-30 transition-all">
           play
        </button>
        <button className = "bg-gray-600 px-5 py-2 w-26 text-white rounded-lg text-lg hover:opacity-50 transition-all">
           ( ! ) info
        </button>
       </div>

    </div>
  )
}

export default TittleContainer