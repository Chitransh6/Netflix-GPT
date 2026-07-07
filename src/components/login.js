import { useRef, useState } from "react"
import Header from "./header"
import {validateinfo} from "../utils/validateinfo";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase.js"


const Login = () => {
  const [signin,setSignin] = useState(true);
  const [error,setError] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  function handlepage(){
      signin == true ? setSignin(false) : setSignin(true);
  }

  function handleform(){

    const val = validateinfo(email.current.value,password.current.value);
    setError(val);

    if(val) return;

    if(!signin){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+"-"+ errorMessage);
    // ..
  });
    }

    else{
         
       signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode +" " + errorMessage);
  });

    }


  }
  

  return (
    <div className="w-full h-full">

        <Header/>  

          <h1 className="text-white absolute top-[18%] left-[35%] text-3xl font-bold">{signin ? "Enter your info to sign in" : "Enter your info to sign up"}</h1> 

        <div className="w-full">
          { signin &&
          <h2 className="text-gray-300 absolute top-[24%] left-[35%] text-l">Or get started with a new account.</h2>
          }

          <form 
          className="absolute top-[32%] left-[35%] flex flex-col gap-3 cursor-pointer" 
          onSubmit={(e)=> e.preventDefault()}>
              
              { !signin && <input className= "w-87 h-10 border border-gray-500 text-white px-2 rounded-sm" type = "text" placeholder="Full Name"/> }

            <input 
            ref={email}
            className= "w-87 h-10 border border-gray-500 text-white px-2 rounded-sm"
            type = "email" 
            placeholder="Email or mobile number"
            />

             <input 
             ref = {password}
             className= "w-87 h-10 border border-gray-500 text-white px-2 rounded-sm" 
             type = "password" 
             placeholder="Password"
             autoComplete="new-password"/>

             <p className  = "text-red-600 font-bold text-l">{error}</p>

            <input 
            onClick = {()=>{handleform()}}
            type = "submit" 
            value = "Continue" 
            className= "w-87 h-10 border border-gray-500 text-white px-2 bg-red-600 rounded-sm border-none hover:bg-red-800 transition-all cursor-pointer" />
            
             <p className="text-gray-300 cursor-pointer" onClick={()=>{handlepage()}} >{signin ? "New To Netflix? Sign Up Now" : "Already Register? Sign In Now"}</p>

          </form>

         


          <hr className="absolute top-20 w-full h-[1.2px] bg-gray-400 "/>

        <img src = "https://occ-0-8933-988.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png" 
        className = "w-full"/>

        </div>


        
      




    </div>
  )
}

export default Login