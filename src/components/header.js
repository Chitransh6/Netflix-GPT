import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>{ return state?.user});


  useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
  if (user) {

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    dispatch(addUser({uid : uid,email : email,displayName : displayName}));
    navigate("/browse");
    // ...
  } else {
    dispatch(removeUser());
    navigate("/");
    // User is signed out
    // ...
  }
 
})

return () => onAuthStateChanged();

},[]);

  return (
    <>
    <div className = "flex justify-between absolute w-full h-25 px-8 py-2 bg-linear-to-b from-black items-center z-10">
        <img className = "w-44"src = {LOGO} alt = "logo"/>
        
       {user ? (
        <button className = "bg-red-700 rounded-lg px-2 py-2 w-25 h-12 text-white text-xl hover:bg-red-800" onClick={()=>{ signOut(auth);}}>Sign Out
        </button>
        ): <div></div> }
    </div>

    


    </>
    
  )
}

export default Header