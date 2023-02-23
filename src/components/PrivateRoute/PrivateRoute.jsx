import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getToken } from "redux/selectors";

const PrivateRoute = ({component}) => {
    const token = useSelector(getToken)
    return token ? component  : <Navigate to={'/login'} />;
}
 
export default PrivateRoute 