import { createBrowserRouter } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";
import { RouterProvider } from "react-router-dom";

const Body = () => {

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
 
  

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};

export default Body;
