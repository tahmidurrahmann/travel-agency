import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../shared/Loading/Loading";

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading />
    }

    if(user?.email){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;