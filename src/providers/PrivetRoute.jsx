import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
        if(user?.email){
            return children
        }
     return <Navigate t0="/login" replace></Navigate>
};

export default PrivetRoute;