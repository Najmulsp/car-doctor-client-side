import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Services from "./Services";
import Login from "../components/Login";
import Register from "../components/Register";
import ServiceDetails from "./ServiceDetails";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";
import About from "../components/About";
import Orders from "./Orders";
import PrivetRoute from "../providers/PrivetRoute";



const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/services",
            element: <Services></Services>,
        },
        {
            path: "/serviceDetails/:id",
            element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: "/checkout/:id",
            element: <Checkout></Checkout>, 
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)           
        },
        {
            path: "/about",
            element: <About></About>,            
        },
        {
            path: "/orders",
            element:<PrivetRoute>
                <Orders></Orders>,            
            </PrivetRoute>
        },
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;