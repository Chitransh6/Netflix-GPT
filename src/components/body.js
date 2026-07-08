import { createBrowserRouter } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";
import { RouterProvider } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
 
  useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
  if (user) {

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    dispatch(addUser({uid : uid,email : email,displayName : displayName}));
    // ...
  } else {
    dispatch(removeUser());
    // User is signed out
    // ...
  }
 
})

return () => onAuthStateChanged();

},[dispatch]);

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};

export default Body;
