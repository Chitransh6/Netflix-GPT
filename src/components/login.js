import { useState } from "react"
import Header from "./header"

const Login = () => {
  const [signin,setSignin] = useState(true);

  function handlepage(){
      signin == true ? setSignin(false) : setSignin(true);
  }
  return (
    <div className="w-full">

        <Header/>  

          <h1 className="text-white absolute top-[18%] left-[35%] text-3xl font-bold">{signin ? "Enter your info to sign in" : "Enter your info to sign up"}</h1> 

        <div className="w-full">
          { signin &&
          <h2 className="text-gray-300 absolute top-[24%] left-[35%] text-l">Or get started with a new account.</h2>
          }

          <form className="absolute top-[32%] left-[35%] flex flex-col gap-3 cursor-pointer" action = "" method = "">
              
              { !signin && <input className= "w-87 h-10 border-[1px] border-gray-500 text-white px-2 rounded-sm" type = "text" placeholder="Full Name"/> }

            <input className= "w-87 h-10 border-[1px] border-gray-500 text-white px-2 rounded-sm" type = "text" placeholder="Email or mobile number"/>

             <input className= "w-87 h-10 border-[1px] border-gray-500 text-white px-2 rounded-sm" type = "text" placeholder="Password"/>

            <input type = "submit" value = "Continue" className= "w-87 h-10 border-[1px] border-gray-500 text-white px-2 bg-red-600 rounded-sm border-none hover:bg-red-800 transition-all cursor-pointer" />
            
             <p className="text-gray-300 gap-3 cursor-pointer" onClick={()=>{handlepage()}} >{signin ? "New To Netflix? Sign Up Now" : "Already Register? Sign In Now"}</p>

          </form>

         


          <hr className="absolute top-20 w-full h-[1.2px] bg-gray-400 "/>

        <img src = "https://occ-0-8933-988.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png" 
        className = ""/>

        </div>


        
      




    </div>
  )
}

export default Login