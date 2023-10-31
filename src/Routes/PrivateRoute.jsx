import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)

    if(loading){
        return <div className="h-screen flex justify-center items-center"><img src="https://i.ibb.co/QHPT5NM/WiqN.gif" alt="" /></div>
    }

    if (user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>  //state={{from: location}}
};

export default PrivateRoute;