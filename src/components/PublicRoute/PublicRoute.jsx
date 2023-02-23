import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getToken } from "redux/selectors";

const PublicRoute = ({component}) => {
    const token = useSelector(getToken);
    return token ? <Navigate to={'/contacts'} /> : component;
}
 
export default PublicRoute;