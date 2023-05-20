import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../Login/Login";
import SighUp from "../SignUp/SighUp";
import AddAtoy from "../pages/AddAtoy/AddAtoy";
import AllToys from "../pages/AllToys/AllToys";
import SingleToys from "../pages/SingleToy/SingleToys";
import PrivateRoutes from "../pages/PrivateRoutes/PrivateRoutes";
import MyToy from "../pages/MyToy/MyToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <SighUp></SighUp>
        },
        {
          path: 'addAtoy',
          element: <PrivateRoutes><AddAtoy></AddAtoy></PrivateRoutes>
        },
        {
          path: 'alltoys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toy')
        },
        {
          path: 'toy/:id',
          element: <PrivateRoutes><SingleToys></SingleToys></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: 'mytoy',
          element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);

export default router;