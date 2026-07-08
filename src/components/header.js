import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=>{ return state?.user});

  return (
    <>
    <div className = "flex justify-between absolute w-screen h-25 px-8 py-2 bg-linear-to-b from-black items-center">
        <img className = "w-44"src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo"/>
        
       {user ? (
        <button className = "bg-red-700 rounded-lg px-2 py-2 w-25 h-12 text-white text-xl hover:bg-red-800" onClick={()=>{ signOut(auth); navigate("/")}}>Sign Out
        </button>
        ): <div></div> }
    </div>

    


    </>
    
  )
}

export default Header