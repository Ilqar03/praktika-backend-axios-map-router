import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Add from "../Pages/Add/Add";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/addpage",
        element: <Add/>,
    },
    {
        path: "/detailpage/:_id",
        element: <Detail/>,
    },
]);
export default router