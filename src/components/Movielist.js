
import { POSTER_URL } from "../utils/constants"
const Movielist = ({poster}) => {
  return (
    <div className = "w-40">
        <img src = {POSTER_URL + poster} alt = "movie"/>
    </div>
  )
}

export default Movielist